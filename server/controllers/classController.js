const classModel = require("../models/Class");
const trainerModel = require("../models/Trainer");

const createClass = async (req, res) => {
    try {
        if (!req.user || !['admin', 'trainer'].includes(req.user.role)) {
            return res.status(403).json({ message: "Access denied. Only admin or trainer can create classes.", success: false });
        }
        const { name, description, schedule, trainer } = req.body;
        const newClass = await classModel.create({
            name,
            description,
            schedule,
            trainer,
            createdBy: req.user.id,
            createdByRole: req.user.role
        });
        res.status(201).json({ message: "Class created successfully", success: true, class: newClass });
    } catch (error) {
        res.status(500).json({ message: "Error creating class", success: false });
    }
}

const getAllClasses = async (req, res) => {
    try {
        const classes = await classModel.find().populate('trainer').populate('createdBy');
        res.status(200).json({ message: "Classes fetched successfully", success: true, classes });
    } catch (error) {
        res.status(500).json({ message: "Error fetching classes", success: false });
    }
}

const updateClass = async (req, res) => {
    try {
        const classId = req.params.id;
        if (!['admin', 'trainer'].includes(req.user.role)) {
            return res.status(403).json({ message: "Access denied. Only admin or trainer can update classes.", success: false });
        }
        const updated = await classModel.findByIdAndUpdate(classId, req.body, { new: true });
        if (!updated) {
            return res.status(404).json({ message: "Class not found", success: false });
        }
        res.status(200).json({ message: "Class updated successfully", success: true, class: updated });
    } catch (error) {
        res.status(500).json({ message: "Error updating class", success: false });
    }
}


const getClassById = async (req, res) => {
    try {
        const classItem = await classModel.findById(req.params.id).populate('trainer').populate('createdBy');
        if (!classItem) {
            return res.status(404).json({ message: 'Class not found', success: false });
        }
        res.status(200).json({ message: "Class fetched successfully", success: true, class: classItem });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching class', success: false });
    }
}

const deleteClass = async (req, res) => {
    try {
        if (!['admin', 'trainer'].includes(req.user.role)) {
            return res.status(403).json({ message: 'Access denied. Only admin or trainer can delete classes.', success: false });
        }
        const classItem = await classModel.findById(req.params.id);
        if (!classItem) {
            return res.status(404).json({ message: 'Class not found', success: false });
        }

        if (req.user.role === 'trainer') {
            if (
                (classItem.createdBy && classItem.createdBy.toString() !== req.user.id) &&
                (classItem.trainer && classItem.trainer.toString() !== req.user.id)
            ) {
                return res.status(403).json({ message: 'Access denied. Trainer can only delete their own classes.', success: false });
            }
        }

        await classItem.deleteOne();
        res.status(200).json({ message: 'Class deleted successfully', success: true });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting class', success: false });
    }
}

module.exports = {
    createClass,
    getAllClasses,
    updateClass,
    getClassById,
    deleteClass,
};
