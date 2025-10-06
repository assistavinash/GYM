const jwt = require('jsonwebtoken');
const Joi = require('joi');

const ensureAuthenticated = (req, res, next) => {
    const auth = req.headers['authorization'];
    if (!auth) {
        return res.status(403).json({ message: "Unauthorized: No token provided", success: false })
    }
    
    // Check if token is blacklisted
    if (global.tokenBlacklist && global.tokenBlacklist.has(auth)) {
        return res.status(403).json({ message: "Unauthorized: Token has been invalidated", success: false });
    }
    
    try {
        const decoded = jwt.verify(auth, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(403).json({ message: "Unauthorized: Invalid token", success: false });        
    }
}

const registervalidation = (req, res, next) => {
    const schema = Joi.object({
        name: Joi.string().min(3).max(30).required(),
        email: Joi.string().email().required(),
        phone: Joi.string().pattern(/^[0-9]{10}$/).required().messages({
            'string.pattern.base': 'Phone number must be exactly 10 digits',
            'any.required': 'Phone number is required'
        }),
        password: Joi.string().min(6).required(),
        role: Joi.string().valid('user', 'admin', 'trainer').optional().default('user')
    });

    const { error } = schema.validate(req.body);

    if (error) {
        return res.status(400).json({
            success: false,
            message: "Bad Request: " + error.details[0].message
        });
    }

    next();
};

const loginValidation = (req, res, next) => {
    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(6).required()
    });

    const { error } = schema.validate(req.body);

    if (error) {
        return res.status(400).json({
            success: false,
            message: "Bad Request: " + error.details[0].message
        });
    }

    next();
};

module.exports = {
    ensureAuthenticated,
    registervalidation,
    loginValidation
};
