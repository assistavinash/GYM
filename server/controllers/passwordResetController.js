const bcrypt = require('bcryptjs');
const userModel = require('../models/User');


// Store OTPs temporarily (in production, use Redis or similar)
const otpStore = new Map();

const generateOTP = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
};

const requestReset = async (req, res) => {
    try {
        const { email, phone, method } = req.body;
        let user;
        let identifier;

        if (method === 'email') {
            user = await userModel.findOne({ email });
            identifier = email;
        } else if (method === 'phone') {
            user = await userModel.findOne({ phone });
            identifier = phone;
        }

        if (!user) {
            return res.status(404).json({ 
                message: `No account found with this ${method === 'email' ? 'email' : 'phone number'}`,
                success: false
            });
        }

        const otp = generateOTP();
        
        otpStore.set(identifier, {
            otp,
            timestamp: Date.now(),
            attempts: 0
        });

        if (method === 'email') {
            const { sendOTPEmail } = require('../utils/email');
            try {
                await sendOTPEmail(email, otp);
            } catch (err) {
                console.error('Error sending OTP email:', err);
                return res.status(500).json({ message: 'Failed to send OTP email', success: false });
            }
        }

        let maskedIdentifier;
        if (method === 'email') {
            const [username, domain] = identifier.split('@');
            maskedIdentifier = `${username.charAt(0)}****@${domain}`;
        } else {
            maskedIdentifier = identifier.replace(/(\d{2})(\d{6})(\d{2})/, '$1******$3');
        }

        res.status(200).json({ 
            message: `OTP sent successfully to ${maskedIdentifier}`,
            success: true,
            maskedIdentifier
        });
    } catch (error) {
        res.status(500).json({ message: "Error in password reset request", success: false });
    }
}

const resetPassword = async (req, res) => {
    try {
        const { email, phone, otp, newPassword } = req.body;
        const identifier = email || phone;

        const otpData = otpStore.get(identifier);
        if (!otpData) {
            return res.status(400).json({ message: "OTP expired or not requested", success: false });
        }

        if (Date.now() - otpData.timestamp > 10 * 60 * 1000) {
            otpStore.delete(identifier);
            return res.status(400).json({ message: "OTP expired", success: false });
        }

        if (otpData.otp !== otp) {
            otpData.attempts += 1;
            if (otpData.attempts >= 3) {
                otpStore.delete(identifier);
                return res.status(400).json({ message: "Too many incorrect attempts. Please request a new OTP", success: false });
            }
            return res.status(400).json({ message: "Invalid OTP", success: false });
        }

        const user = await userModel.findOne(email ? { email } : { phone });
        if (!user) {
            return res.status(404).json({ message: "User not found", success: false });
        }

        const hashedPassword = await bcrypt.hash(newPassword, 10);
        user.password = hashedPassword;
        await user.save();

        otpStore.delete(identifier);

        res.status(200).json({ message: "Password reset successful", success: true });
    } catch (error) {
        res.status(500).json({ message: "Error in password reset", success: false });
    }
}


const getAllOtpRequests = (req, res) => {
    try {
        const all = Array.from(otpStore.entries()).map(([identifier, data]) => ({ identifier, ...data }));
        res.status(200).json({ message: "OTP requests fetched successfully", success: true, requests: all });
    } catch (error) {
        res.status(500).json({ message: "Error fetching OTP requests", success: false });
    }
}

const getOtpRequestByIdentifier = (req, res) => {
    try {
        const identifier = req.params.identifier;
        const data = otpStore.get(identifier);
        if (!data) {
            return res.status(404).json({ message: 'OTP request not found', success: false });
        }
        res.status(200).json({ message: "OTP request fetched successfully", success: true, request: { identifier, ...data } });
    } catch (error) {
        res.status(500).json({ message: "Error fetching OTP request", success: false });
    }
}

module.exports = {
    requestReset,
    resetPassword,
    getAllOtpRequests,
    getOtpRequestByIdentifier,
};
