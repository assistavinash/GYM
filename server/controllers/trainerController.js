const trainerModel = require('../models/Trainer');

const getAllTrainers = async (req, res) => {
    try {
        const trainers = await trainerModel.find();
        res.status(200).json({ message: "Trainers fetched successfully", success: true, trainers });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching trainers', success: false });
    }
}

const createManyTrainers = async (req, res) => {
    try {
        const trainers = await trainerModel.insertMany(req.body.trainers);
        res.status(201).json({ message: 'Trainers added successfully', success: true, trainers });
    } catch (error) {
        res.status(500).json({ message: 'Error adding trainers', success: false });
    }
}


const getTrainerById = async (req, res) => {
    try {
        const trainer = await trainerModel.findById(req.params.id);
        if (!trainer) {
            return res.status(404).json({ message: 'Trainer not found', success: false });
        }
        res.status(200).json({ message: "Trainer fetched successfully", success: true, trainer });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching trainer', success: false });
    }
}

const createTrainer = async (req, res) => {
    try {
        if (!req.user || req.user.role !== 'admin') {
            return res.status(403).json({ message: 'Access denied. Only admin can create trainers.', success: false });
        }
        const trainer = await trainerModel.create(req.body);
        res.status(201).json({ message: 'Trainer created successfully', success: true, trainer });
    } catch (error) {
        res.status(500).json({ message: 'Error creating trainer', success: false });
    }
}

const updateTrainer = async (req, res) => {
    try {
        const updated = await trainerModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updated) {
            return res.status(404).json({ message: 'Trainer not found', success: false });
        }
        res.status(200).json({ message: 'Trainer updated successfully', success: true, trainer: updated });
    } catch (error) {
        res.status(500).json({ message: 'Error updating trainer', success: false });
    }
}

const deleteTrainer = async (req, res) => {
    try {
        const deleted = await trainerModel.findByIdAndDelete(req.params.id);
        if (!deleted) {
            return res.status(404).json({ message: 'Trainer not found', success: false });
        }
        res.status(200).json({ message: 'Trainer deleted successfully', success: true });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting trainer', success: false });
    }
}

module.exports = {
    getAllTrainers,
    createManyTrainers,
    getTrainerById,
    createTrainer,
    updateTrainer,
    deleteTrainer,
};
