const { ensureAuthenticated } = require('../middleware/auth');
const { getAllUsers, getUserById, createUser, updateUser, deleteUser } = require('../controllers/userController');

const router = require('express').Router();

router.get('/', ensureAuthenticated, getAllUsers);
router.get('/:id', ensureAuthenticated, getUserById);
router.post('/', createUser);
router.put('/:id', ensureAuthenticated, updateUser);
router.delete('/:id', ensureAuthenticated, deleteUser);

module.exports = router;
