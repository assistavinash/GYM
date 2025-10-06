const { OAuth2Client } = require('google-auth-library');
const userModel = require('../models/User');
const jwt = require('jsonwebtoken');

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

const googleLogin = async (req, res) => {
    try {
        const { credential } = req.body;

        const ticket = await client.verifyIdToken({
            idToken: credential,
            audience: process.env.GOOGLE_CLIENT_ID,
        });

        const payload = ticket.getPayload();
        const { email, name } = payload;

        const user = await userModel.findOne({ email });

        if (!user) {
            return res.status(403).json({
                message: 'Please register with email/password first and verify your email to enable Google login.',
                success: false
            });
        }

        if (!user.isVerified) {
            return res.status(403).json({
                message: 'Please verify your email to use Google login.',
                success: false
            });
        }

        const jwtToken = jwt.sign(
            { id: user._id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        return res.status(200).json({
            message: 'Google login successful',
            success: true,
            jwtToken,
            email: user.email,
            name: user.name,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
            },
        });
    } catch (error) {
        return res.status(401).json({
            message: 'Google authentication failed',
            success: false
        });
    }
}

module.exports = {
    googleLogin,
};
