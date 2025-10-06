const { registervalidation, loginValidation, ensureAuthenticated } = require('../middleware/auth');
const { register, login, logout, getUser, verifyEmail, resendVerification } = require('../controllers/authController');
const { googleLogin } = require('../controllers/googleAuthController');

const router = require('express').Router();

router.post('/register', registervalidation, register);
router.post('/login', loginValidation, login);
router.post('/verify', verifyEmail);
router.post('/resend-code', resendVerification);
router.get('/user', ensureAuthenticated, getUser);
router.post('/logout', logout);
router.post('/google', googleLogin);

module.exports = router;