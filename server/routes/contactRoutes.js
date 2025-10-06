const express = require('express');
const router = express.Router();
const { 
    sendContactVerificationEmail, 
    sendContactConfirmationEmail, 
    sendContactNotificationToOwner 
} = require('../utils/email');

// Store verification codes temporarily (in production, use Redis or database)
const verificationCodes = new Map();

// Send verification email for contact form
router.post('/send-verification', async (req, res) => {
    try {
        const { name, email, phone, subject, message, inquiryType } = req.body;

        // Validate required fields
        if (!name || !email || !message) {
            return res.status(400).json({ 
                success: false, 
                message: 'Name, email, and message are required' 
            });
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ 
                success: false, 
                message: 'Please provide a valid email address' 
            });
        }

        // Generate 6-digit verification code
        const code = Math.floor(100000 + Math.random() * 900000);
        
        // Store code with expiration (10 minutes)
        verificationCodes.set(email, {
            code,
            formData: { name, email, phone, subject, message, inquiryType },
            expires: Date.now() + 10 * 60 * 1000 // 10 minutes
        });

        // Send verification email
        console.log(`Attempting to send verification email to: ${email}`);
        console.log(`Verification code: ${code}`);
        
        await sendContactVerificationEmail(email, code, { name, email, phone, subject, message, inquiryType });
        
        console.log(`Verification email sent successfully to: ${email}`);

        res.json({
            success: true,
            message: 'Verification email sent successfully',
            code: code // Remove this in production
        });

    } catch (error) {
        console.error('Send verification email error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to send verification email. Please try again.'
        });
    }
});

// Verify code and submit contact form
router.post('/verify-and-submit', async (req, res) => {
    try {
        const { email, code } = req.body;

        if (!email || !code) {
            return res.status(400).json({
                success: false,
                message: 'Email and verification code are required'
            });
        }

        // Check if verification code exists and is valid
        const storedData = verificationCodes.get(email);
        
        if (!storedData) {
            return res.status(400).json({
                success: false,
                message: 'Verification code not found. Please request a new one.'
            });
        }

        if (Date.now() > storedData.expires) {
            verificationCodes.delete(email);
            return res.status(400).json({
                success: false,
                message: 'Verification code has expired. Please request a new one.'
            });
        }

        if (parseInt(code) !== storedData.code) {
            return res.status(400).json({
                success: false,
                message: 'Invalid verification code. Please try again.'
            });
        }

        // Code is valid, process the contact form
        const formData = storedData.formData;
        
        // Here you would typically save to database
        console.log('Contact form submitted:', {
            ...formData,
            submittedAt: new Date().toISOString(),
            verified: true
        });

        // Send confirmation email to user
        await sendContactConfirmationEmail(email, formData);

        // Send notification to owner/admin
        try {
            await sendContactNotificationToOwner(formData);
            console.log('Owner notification sent successfully');
        } catch (ownerEmailError) {
            console.error('Failed to send owner notification:', ownerEmailError);
            // Don't fail the main request if owner notification fails
        }

        // Clean up verification code
        verificationCodes.delete(email);

        res.json({
            success: true,
            message: 'Contact form submitted successfully. We will get back to you within 24 hours.'
        });

    } catch (error) {
        console.error('Contact form submission error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to submit contact form. Please try again.'
        });
    }
});

// Test email route
router.post('/test-email', async (req, res) => {
    try {
        const { email } = req.body;
        
        if (!email) {
            return res.status(400).json({
                success: false,
                message: 'Email is required'
            });
        }

        const testCode = 123456;
        await sendContactVerificationEmail(email, testCode, {
            name: 'Test User',
            email: email,
            subject: 'Test Email',
            message: 'This is a test message',
            inquiryType: 'general'
        });

        res.json({
            success: true,
            message: 'Test email sent successfully',
            code: testCode
        });

    } catch (error) {
        console.error('Test email error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to send test email: ' + error.message
        });
    }
});

// Clean up expired verification codes (run periodically)
setInterval(() => {
    const now = Date.now();
    for (const [email, data] of verificationCodes.entries()) {
        if (now > data.expires) {
            verificationCodes.delete(email);
        }
    }
}, 5 * 60 * 1000); // Clean up every 5 minutes

// Test route for owner notification (remove in production)
router.post('/test-owner-notification', async (req, res) => {
    try {
        const testFormData = {
            name: 'Test User',
            email: 'test@example.com',
            phone: '+91-9876543210',
            subject: 'Test Inquiry',
            message: 'This is a test message to check owner notification',
            inquiryType: 'general'
        };
        
        await sendContactNotificationToOwner(testFormData);
        res.json({
            success: true,
            message: 'Test owner notification sent successfully'
        });
    } catch (error) {
        console.error('Test owner notification failed:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to send test notification: ' + error.message
        });
    }
});

module.exports = router;