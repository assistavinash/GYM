const userModel = require("../models/User");

const getAllUsers = async (req, res) => {
    try {
        const users = await userModel.find();
        res.status(200).json({ message: "Users fetched successfully", success: true, users });
    } catch (error) {
        res.status(500).json({ message: "Error fetching users", success: false });
    }
}

const approveUser = async (req, res) => {
    try {
        const user = await userModel.findByIdAndUpdate(
            req.params.id,
            { isApproved: true },
            { new: true }
        );
        if (!user) {
            return res.status(404).json({ message: "User not found", success: false });
        }
        res.status(200).json({ message: "User approved successfully", success: true, user });
    } catch (error) {
        res.status(500).json({ message: "Error approving user", success: false });
    }
}

const deleteUser = async (req, res) => {
    try {
        const user = await userModel.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).json({ message: "User not found", success: false });
        }
        res.status(200).json({ message: "User deleted successfully", success: true });
    } catch (error) {
        res.status(500).json({ message: "Error deleting user", success: false });
    }
}

const createUserByAdmin = async (req, res) => {
    try {
        const { name, email, phone, password, role } = req.body;
        const existing = await userModel.findOne({ email });
        if (existing) {
            return res.status(409).json({ message: "User already exists", success: false });
        }

        const bcrypt = require("bcrypt");
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await userModel.create({
            name,
            email,
            phone,
            password: hashedPassword,
            role,
            isApproved: true
        });

        res.status(201).json({ message: "User created by admin successfully", success: true, user });
    } catch (error) {
        res.status(500).json({ message: "Error creating user", success: false });
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

const updateUserByAdmin = async (req, res) => {
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

module.exports = {
    getAllUsers,
    approveUser,
    deleteUser,
    createUserByAdmin,
    getUserById,
    updateUserByAdmin,
};
