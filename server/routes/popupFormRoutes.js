const { ensureAuthenticated } = require('../middleware/auth');
const { submitPopupForm, getAllPopupForms } = require('../controllers/popupFormController');

const router = require('express').Router();

router.post('/', submitPopupForm);
router.get('/', ensureAuthenticated, getAllPopupForms);

module.exports = router;
