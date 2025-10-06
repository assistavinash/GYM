const { requestReset, resetPassword, getAllOtpRequests, getOtpRequestByIdentifier } = require('../controllers/passwordResetController');

const router = require('express').Router();

router.get('/otp-requests', getAllOtpRequests);
router.get('/otp-requests/:identifier', getOtpRequestByIdentifier);
router.post('/request-reset', requestReset);
router.post('/reset-password', resetPassword);

module.exports = router;
