const { ensureAuthenticated } = require('../middleware/auth');
const authorize = require('../middleware/role');
const { getAllUsers, getUserById, approveUser, deleteUser, createUserByAdmin, updateUserByAdmin } = require('../controllers/adminController');

const router = require('express').Router();

router.get('/users', ensureAuthenticated, authorize('admin'), getAllUsers);
router.get('/users/:id', ensureAuthenticated, authorize('admin'), getUserById);
router.patch('/users/:id/approve', ensureAuthenticated, authorize('admin'), approveUser);
router.put('/users/:id', ensureAuthenticated, authorize('admin'), updateUserByAdmin);
router.delete('/users/:id', ensureAuthenticated, authorize('admin'), deleteUser);
router.post('/users', ensureAuthenticated, authorize('admin'), createUserByAdmin);

module.exports = router;
