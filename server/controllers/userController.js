const bcrypt = require('bcryptjs');
const userModel = require('../models/User');

const getAllUsers = async (req, res) => {
    try {
        const users = await userModel.find();
        res.status(200).json({ message: "Users fetched successfully", success: true, users });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching users', success: false });
    }
}

const getUserById = async (req, res) => {
    try {
        const user = await userModel.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found', success: false });
        }
        res.status(200).json({ message: "User fetched successfully", success: true, user });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching user', success: false });
    }
}

const createUser = async (req, res) => {
    try {
        if (!req.user || req.user.role !== 'admin') {
            return res.status(403).json({ message: 'Access denied. Only admin can create users.', success: false });
        }
        const { name, email, phone, password, role } = req.body;
        const existing = await userModel.findOne({ email });
        if (existing) {
            return res.status(409).json({ message: 'User already exists', success: false });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await userModel.create({
            name,
            email,
            phone,
            password: hashedPassword,
            role
        });
        res.status(201).json({ message: 'User created successfully', success: true, user });
    } catch (error) {
        res.status(500).json({ message: 'Error creating user', success: false });
    }
}

const updateUser = async (req, res) => {
    try {
        const updated = await userModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updated) {
            return res.status(404).json({ message: 'User not found', success: false });
        }
        res.status(200).json({ message: 'User updated successfully', success: true, user: updated });
    } catch (error) {
        res.status(500).json({ message: 'Error updating user', success: false });
    }
}

const deleteUser = async (req, res) => {
    try {
        const deleted = await userModel.findByIdAndDelete(req.params.id);
        if (!deleted) {
            return res.status(404).json({ message: 'User not found', success: false });
        }
        res.status(200).json({ message: 'User deleted successfully', success: true });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting user', success: false });
    }
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
};
