
const bcrypt = require('bcryptjs');
const userModel = require('../models/User');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
    try {
        const { name, email, phone, password, role } = req.body;
        
        // Check if user already exists
        const user = await userModel.findOne({ email });
        if (user) {
            return res.status(409)
                .json({ message: "User already exists, you can login", success: false });
        }
        
        // Create new user with phone field
        const newUser = new userModel({ 
            name, 
            email, 
            phone, 
            password,
            role: role || 'user' // Default to 'user' if no role specified
        });
        
        // Password will be hashed automatically by the pre-save middleware
        await newUser.save();
        
        res.status(201).json({ 
            message: "User registered successfully", 
            success: true 
        });
    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({ 
            message: "Error in Registering user", 
            success: false,
            error: error.message 
        });
    }
}

const getUser = async (req, res) => {
    try {
        const userId = req.user.id || req.user._id;
        if (!userId) {
            return res.status(401).json({ message: 'Invalid token payload', success: false });
        }
        const user = await userModel.findById(userId).select('-password -__v');
        
        if (!user) {
            return res.status(404).json({ message: 'User not found', success: false });
        }
        
        res.status(200).json({
            message: 'User fetched successfully',
            success: true,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
                phone: user.phone,
            }
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error', success: false });
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log('Login attempt:', { email, password: '***masked***' });
        
        const user = await userModel.findOne({ email });
        if (!user) {
            console.log('User not found:', email);
            return res.status(403)
                .json({ message: "User not found", success: false });
        }
        
        console.log('User found:', { email: user.email, role: user.role });
        console.log('Password from DB (first 20 chars):', user.password.substring(0, 20));
        
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        console.log('Password match result:', isPasswordMatch);
        
        if (!isPasswordMatch) {
            return res.status(403)
                .json({ message: "Invalid password", success: false });
        }

        const jwtToken = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ 
            message: "Login successful", 
            success: true, 
            jwtToken, 
            email, 
            name: user.name,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
                phone: user.phone
            }
        });
    } catch (error) {
        res.status(500).json({ message: "Error in Login", success: false });
    }
}

const logout = async (req, res) => {
    try {
        // Get token from Authorization header
        const auth = req.headers['authorization'];
        if (auth) {
            try {
                // Verify and decode the token to get expiry time
                const decoded = jwt.verify(auth, process.env.JWT_SECRET);
                
                // Add token to blacklist (in production, use Redis or database)
                // For now, we'll use in-memory storage
                if (!global.tokenBlacklist) {
                    global.tokenBlacklist = new Set();
                }
                global.tokenBlacklist.add(auth);
                
                // Optional: Clean up expired tokens from blacklist
                // This is basic implementation - in production use Redis with TTL
                console.log('Token blacklisted:', auth.substring(0, 20) + '...');
                
                res.status(200).json({ 
                    message: 'Logout successful', 
                    success: true,
                    info: 'Token invalidated and cleared from client storage'
                });
            } catch (tokenError) {
                // Invalid token - still allow logout
                res.status(200).json({ 
                    message: 'Logout successful', 
                    success: true,
                    info: 'Invalid token cleared from client storage'
                });
            }
        } else {
            // No token provided - still allow logout
            res.status(200).json({ 
                message: 'Logout successful', 
                success: true,
                info: 'No token to invalidate'
            });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error in Logout', success: false });
    }
}

const verifyEmail = async (req, res) => {
    try {
        const { userId, code } = req.body;
        if (!userId || !code) {
            return res.status(400).json({ message: 'Missing parameters', success: false });
        }

        const user = await userModel.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found', success: false });
        }
        if (user.isVerified) {
            return res.status(200).json({ message: 'Already verified', success: true });
        }

        const valid = user.verifyCode(code);
        if (!valid) {
            return res.status(400).json({ message: 'Invalid or expired code', success: false });
        }

        user.isVerified = true;
        user.verificationCode = undefined;
        user.verificationCodeExpires = undefined;
        await user.save();

        const jwtToken = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({
            message: 'Email verified successfully',
            success: true,
            jwtToken,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
            }
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error', success: false });
    }
}

const resendVerification = async (req, res) => {
    try {
        const { userId } = req.body;
        if (!userId) {
            return res.status(400).json({ message: 'Missing userId', success: false });
        }
        const user = await userModel.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found', success: false });
        }
        if (user.isVerified) {
            return res.status(400).json({ message: 'User already verified', success: false });
        }

        const code = user.generateVerificationCode();
        await user.save();
        try {
            const { sendVerificationEmail } = require('../utils/email');
            await sendVerificationEmail(user.email, code);
        } catch (mailErr) {
            console.error('Resend email failed:', mailErr);
        }
        res.status(200).json({ message: 'Verification code resent', success: true });
    } catch (error) {
        res.status(500).json({ message: 'Server error', success: false });
    }
}

module.exports = {
    register,
    login,
    logout,
    getUser,
    verifyEmail,
    resendVerification,
};
