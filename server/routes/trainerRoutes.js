const { ensureAuthenticated } = require('../middleware/auth');
const { getAllTrainers, createManyTrainers, getTrainerById, createTrainer, updateTrainer, deleteTrainer } = require('../controllers/trainerController');

const router = require('express').Router();

router.get('/', getAllTrainers);
router.get('/:id', getTrainerById);
router.post('/', ensureAuthenticated, createTrainer);
router.post('/bulk', ensureAuthenticated, createManyTrainers);
router.put('/:id', ensureAuthenticated, updateTrainer);
router.delete('/:id', ensureAuthenticated, deleteTrainer);

module.exports = router;
