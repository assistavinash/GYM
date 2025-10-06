const nodemailer = require('nodemailer');

const sendGymEnquiry = async (req, res) => {
    try {
        const { name, whatsapp, email, goal, time } = req.body;
        const otp = Math.floor(100000 + Math.random() * 900000);
        
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        const otpMailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Gym Enquiry - Email Verification',
            text: `Hi ${name},\n\nThank you for your interest in our gym!\n\nYour verification code is: ${otp}\n\nPlease enter this code to verify your email address.\n\nBest regards,\nPowerPoint Gym Team`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #333;">Email Verification Required</h2>
                    <p>Hi ${name},</p>
                    <p>Thank you for your interest in our gym!</p>
                    <div style="background-color: #f0f0f0; padding: 20px; text-align: center; margin: 20px 0;">
                        <h3 style="color: #333; margin: 0;">Your Verification Code:</h3>
                        <h1 style="color: #007bff; font-size: 32px; margin: 10px 0;">${otp}</h1>
                    </div>
                    <p>Please enter this code to verify your email address and complete your gym enquiry.</p>
                    <p>Best regards,<br>PowerPoint Gym Team</p>
                </div>
            `
        };

        await transporter.sendMail(otpMailOptions);

        global.pendingEnquiries = global.pendingEnquiries || new Map();
        global.pendingEnquiries.set(email, {
            name,
            whatsapp, 
            email,
            goal,
            time,
            otp,
            timestamp: Date.now()
        });

        res.status(200).json({ 
            success: true, 
            message: 'Verification code sent to your email!',
            requiresVerification: true
        });

    } catch (error) {
        res.status(500).json({ success: false, message: 'Error sending enquiry', success: false });
    }
}

const verifyEnquiryOTP = async (req, res) => {
    try {
        const { email, otp } = req.body;
        
        global.pendingEnquiries = global.pendingEnquiries || new Map();
        const pendingEnquiry = global.pendingEnquiries.get(email);
        
        if (!pendingEnquiry) {
            return res.status(404).json({ success: false, message: 'No pending enquiry found for this email' });
        }
        
        const now = Date.now();
        const otpAge = now - pendingEnquiry.timestamp;
        const maxAge = 30 * 60 * 1000;
        
        if (otpAge > maxAge) {
            global.pendingEnquiries.delete(email);
            return res.status(400).json({ success: false, message: 'Verification code has expired' });
        }
        
        if (pendingEnquiry.otp.toString() !== otp.toString()) {
            return res.status(400).json({ success: false, message: 'Invalid verification code' });
        }
        
        const { name, whatsapp, goal, time } = pendingEnquiry;
        const ownerMessage = `New Gym Enquiry Received:\n\nName: ${name}\nWhatsApp: ${whatsapp}\nEmail: ${email}\nGoal: ${goal}\nPreferred Time: ${time}\n\nPlease contact the customer soon!`;
        
        const ownerTransporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        const ownerEmail = process.env.GYM_OWNER_EMAIL || process.env.EMAIL_USER;
        const ownerMailOptions = {
            from: process.env.EMAIL_USER,
            to: ownerEmail,
            subject: 'New Gym Enquiry - Customer Verified',
            text: ownerMessage,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #333;">New Gym Enquiry Received</h2>
                    <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
                        <p><strong>Name:</strong> ${name}</p>
                        <p><strong>WhatsApp:</strong> ${whatsapp}</p>
                        <p><strong>Email:</strong> ${email}</p>
                        <p><strong>Fitness Goal:</strong> ${goal}</p>
                        <p><strong>Preferred Time:</strong> ${time}</p>
                    </div>
                    <p style="color: #28a745;"><strong>✅ Customer email has been verified</strong></p>
                    <p>Please contact the customer soon to assist with their gym enquiry!</p>
                </div>
            `
        };

        await ownerTransporter.sendMail(ownerMailOptions);
        
        global.pendingEnquiries.delete(email);
        
        res.status(200).json({ 
            success: true, 
            message: 'Email verified successfully! Your enquiry has been sent to our team.' 
        });
        
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error verifying OTP' });
    }
}

let gymEnquiries = [];

const saveGymEnquiry = async (req, res) => {
    try {
        const enquiry = req.body;
        enquiry.id = gymEnquiries.length + 1;
        gymEnquiries.push(enquiry);
        res.status(201).json({ message: 'Enquiry saved successfully', success: true, enquiry });
    } catch (error) {
        res.status(500).json({ message: 'Error saving enquiry', success: false });
    }
}

const getAllGymEnquiries = async (req, res) => {
    try {
        res.status(200).json({ message: 'Enquiries fetched successfully', success: true, enquiries: gymEnquiries });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching enquiries', success: false });
    }
}

const getGymEnquiryById = async (req, res) => {
    try {
        const enquiry = gymEnquiries.find(e => e.id === parseInt(req.params.id));
        if (!enquiry) {
            return res.status(404).json({ message: 'Enquiry not found', success: false });
        }
        res.status(200).json({ message: 'Enquiry fetched successfully', success: true, enquiry });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching enquiry', success: false });
    }
}

module.exports = {
    sendGymEnquiry,
    verifyEnquiryOTP,
    saveGymEnquiry,
    getAllGymEnquiries,
    getGymEnquiryById,
};
