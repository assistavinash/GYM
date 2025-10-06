const { ensureAuthenticated } = require('../middleware/auth');
const { createClass, getAllClasses, updateClass, getClassById, deleteClass } = require('../controllers/classController');

const router = require('express').Router();

router.post('/', ensureAuthenticated, createClass);
router.get('/', getAllClasses);
router.get('/:id', getClassById);
router.put('/:id', ensureAuthenticated, updateClass);
router.delete('/:id', ensureAuthenticated, deleteClass);

module.exports = router;
