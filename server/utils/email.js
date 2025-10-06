const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// Test email connection on startup
transporter.verify(function(error, success) {
    if (error) {
        console.log('Email configuration error:', error);
    } else {
        console.log('Email server is ready to take our messages');
    }
});

function sendOTPEmail(to, otp) {
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to,
        subject: 'Your PowerPoint Gym OTP',
        text: `Your OTP for password reset is: ${otp}`
    };
    return transporter.sendMail(mailOptions);
}

function sendVerificationEmail(to, code) {
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to,
        subject: 'Verify your PowerPoint Gym account',
        text: `Your email verification code is: ${code}. This code will expire in 10 minutes.`
    };
    return transporter.sendMail(mailOptions);
}

function sendContactVerificationEmail(to, code, formData) {
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to,
        subject: 'PowerPoint Gym - Contact Form Verification',
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f5f5f5;">
                <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
                    <div style="text-align: center; margin-bottom: 20px;">
                        <h1 style="color: #facc15; margin: 0;">PowerPoint Gym</h1>
                        <p style="color: #666; margin: 5px 0;">Premium Fitness Experience</p>
                    </div>
                    
                    <h2 style="color: #333; text-align: center;">Email Verification Required</h2>
                    
                    <p style="color: #666; line-height: 1.6;">
                        Hi <strong>${formData.name}</strong>,
                    </p>
                    
                    <p style="color: #666; line-height: 1.6;">
                        Thank you for contacting PowerPoint Gym! To complete your inquiry submission, 
                        please verify your email address using the code below:
                    </p>
                    
                    <div style="text-align: center; margin: 30px 0;">
                        <div style="background-color: #facc15; color: white; font-size: 24px; font-weight: bold; 
                                    padding: 15px 30px; border-radius: 8px; display: inline-block; letter-spacing: 3px;">
                            ${code}
                        </div>
                    </div>
                    
                    <p style="color: #666; line-height: 1.6;">
                        <strong>Your Inquiry Details:</strong><br>
                        <strong>Type:</strong> ${formData.inquiryType}<br>
                        <strong>Subject:</strong> ${formData.subject || 'General Inquiry'}<br>
                        <strong>Phone:</strong> ${formData.phone || 'Not provided'}
                    </p>
                    
                    <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin: 20px 0;">
                        <p style="color: #666; margin: 0; font-size: 14px;">
                            <strong>Note:</strong> This verification code will expire in 10 minutes. 
                            If you didn't request this, please ignore this email.
                        </p>
                    </div>
                    
                    <p style="color: #666; line-height: 1.6;">
                        Once verified, we'll process your inquiry and get back to you within 24 hours.
                    </p>
                    
                    <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
                        <p style="color: #999; font-size: 12px; margin: 0;">
                            PowerPoint Gym | 123 Fitness Street, Delhi | +91-1234567890
                        </p>
                    </div>
                </div>
            </div>
        `
    };
    return transporter.sendMail(mailOptions);
}

function sendContactConfirmationEmail(to, formData) {
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to,
        subject: 'PowerPoint Gym - Inquiry Received Successfully',
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f5f5f5;">
                <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
                    <div style="text-align: center; margin-bottom: 20px;">
                        <h1 style="color: #facc15; margin: 0;">PowerPoint Gym</h1>
                        <p style="color: #666; margin: 5px 0;">Premium Fitness Experience</p>
                    </div>
                    
                    <h2 style="color: #333; text-align: center;">Thank You for Contacting Us!</h2>
                    
                    <p style="color: #666; line-height: 1.6;">
                        Hi <strong>${formData.name}</strong>,
                    </p>
                    
                    <p style="color: #666; line-height: 1.6;">
                        We've successfully received your inquiry and our team will get back to you within 24 hours.
                    </p>
                    
                    <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
                        <h3 style="color: #333; margin-top: 0;">Your Inquiry Summary:</h3>
                        <p style="color: #666; margin: 5px 0;"><strong>Type:</strong> ${formData.inquiryType}</p>
                        <p style="color: #666; margin: 5px 0;"><strong>Subject:</strong> ${formData.subject || 'General Inquiry'}</p>
                        <p style="color: #666; margin: 5px 0;"><strong>Email:</strong> ${formData.email}</p>
                        <p style="color: #666; margin: 5px 0;"><strong>Phone:</strong> ${formData.phone || 'Not provided'}</p>
                        <p style="color: #666; margin: 5px 0;"><strong>Message:</strong></p>
                        <p style="color: #666; background-color: white; padding: 10px; border-radius: 5px; margin: 5px 0;">${formData.message}</p>
                    </div>
                    
                    <div style="text-align: center; margin: 30px 0;">
                        <a href="tel:+911234567890" style="background-color: #facc15; color: white; text-decoration: none; 
                                                          padding: 12px 25px; border-radius: 5px; font-weight: bold;">
                            Call Us: +91-1234567890
                        </a>
                    </div>
                    
                    <p style="color: #666; line-height: 1.6;">
                        In the meantime, feel free to explore our website or visit our gym to learn more 
                        about our facilities and membership plans.
                    </p>
                    
                    <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
                        <p style="color: #999; font-size: 12px; margin: 0;">
                            PowerPoint Gym | 123 Fitness Street, Delhi | info@powerpointgym.com
                        </p>
                    </div>
                </div>
            </div>
        `
    };
    return transporter.sendMail(mailOptions);
}

function sendContactNotificationToOwner(formData) {
    const ownerEmail = process.env.EMAIL_USER; // Owner ka email
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: ownerEmail,
        subject: '🚨 New Contact Form Inquiry - PowerPoint Gym',
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f5f5f5;">
                <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
                    <div style="text-align: center; margin-bottom: 20px;">
                        <h1 style="color: #facc15; margin: 0;">PowerPoint Gym</h1>
                        <p style="color: #666; margin: 5px 0;">New Contact Form Inquiry</p>
                    </div>
                    
                    <div style="background-color: #dc3545; color: white; padding: 15px; border-radius: 8px; text-align: center; margin-bottom: 20px;">
                        <h2 style="margin: 0; font-size: 18px;">🔔 ACTION REQUIRED - New Customer Inquiry</h2>
                    </div>
                    
                    <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
                        <h3 style="color: #333; margin-top: 0; border-bottom: 2px solid #facc15; padding-bottom: 10px;">Customer Details:</h3>
                        
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr style="border-bottom: 1px solid #ddd;">
                                <td style="padding: 8px 0; font-weight: bold; color: #555; width: 30%;">Name:</td>
                                <td style="padding: 8px 0; color: #333;">${formData.name}</td>
                            </tr>
                            <tr style="border-bottom: 1px solid #ddd;">
                                <td style="padding: 8px 0; font-weight: bold; color: #555;">Email:</td>
                                <td style="padding: 8px 0; color: #333;">
                                    <a href="mailto:${formData.email}" style="color: #facc15; text-decoration: none;">
                                        ${formData.email}
                                    </a>
                                </td>
                            </tr>
                            <tr style="border-bottom: 1px solid #ddd;">
                                <td style="padding: 8px 0; font-weight: bold; color: #555;">Phone:</td>
                                <td style="padding: 8px 0; color: #333;">
                                    ${formData.phone ? `<a href="tel:${formData.phone}" style="color: #facc15; text-decoration: none;">${formData.phone}</a>` : 'Not provided'}
                                </td>
                            </tr>
                            <tr style="border-bottom: 1px solid #ddd;">
                                <td style="padding: 8px 0; font-weight: bold; color: #555;">Inquiry Type:</td>
                                <td style="padding: 8px 0; color: #333;">
                                    <span style="background-color: #facc15; color: black; padding: 3px 8px; border-radius: 12px; font-size: 12px; font-weight: bold;">
                                        ${formData.inquiryType}
                                    </span>
                                </td>
                            </tr>
                            <tr style="border-bottom: 1px solid #ddd;">
                                <td style="padding: 8px 0; font-weight: bold; color: #555;">Subject:</td>
                                <td style="padding: 8px 0; color: #333;">${formData.subject || 'General Inquiry'}</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px 0; font-weight: bold; color: #555; vertical-align: top;">Message:</td>
                                <td style="padding: 8px 0; color: #333;">
                                    <div style="background-color: white; padding: 15px; border-radius: 5px; border-left: 4px solid #facc15;">
                                        ${formData.message}
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </div>
                    
                    <div style="background-color: #e8f5e8; padding: 15px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #28a745;">
                        <p style="margin: 0; color: #155724; font-weight: bold;">
                            ✅ Email Verified: Customer has verified their email address
                        </p>
                        <p style="margin: 5px 0 0 0; color: #155724; font-size: 14px;">
                            Submitted: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
                        </p>
                    </div>
                    
                    <div style="text-align: center; margin: 30px 0;">
                        <div style="margin-bottom: 15px;">
                            <a href="mailto:${formData.email}?subject=Re: ${formData.subject || 'Your PowerPoint Gym Inquiry'}" 
                               style="background-color: #28a745; color: white; text-decoration: none; 
                                      padding: 12px 25px; border-radius: 5px; font-weight: bold; margin-right: 10px; display: inline-block;">
                                📧 Reply via Email
                            </a>
                        </div>
                        ${formData.phone ? `
                        <div>
                            <a href="tel:${formData.phone}" 
                               style="background-color: #facc15; color: black; text-decoration: none; 
                                      padding: 12px 25px; border-radius: 5px; font-weight: bold; display: inline-block;">
                                📞 Call Customer
                            </a>
                        </div>
                        ` : ''}
                    </div>
                    
                    <div style="background-color: #fff3cd; padding: 15px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #ffc107;">
                        <p style="margin: 0; color: #856404; font-weight: bold;">
                            ⏰ Response Timeline: Please respond within 24 hours for best customer experience
                        </p>
                    </div>
                    
                    <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
                        <p style="color: #999; font-size: 12px; margin: 0;">
                            PowerPoint Gym Admin Panel | This is an automated notification
                        </p>
                    </div>
                </div>
            </div>
        `
    };
    return transporter.sendMail(mailOptions);
}

module.exports = { 
    sendOTPEmail, 
    sendVerificationEmail, 
    sendContactVerificationEmail, 
    sendContactConfirmationEmail,
    sendContactNotificationToOwner 
};
