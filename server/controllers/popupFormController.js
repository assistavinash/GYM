const popupFormModel = require('../models/PopupForm');

const submitPopupForm = async (req, res) => {
    try {
        const { name, email, phone, message } = req.body;
        if (!name || !email || !message) {
            return res.status(400).json({ message: 'Name, email, and message are required.', success: false });
        }
        const form = await popupFormModel.create({ name, email, phone, message });
        res.status(201).json({ message: 'Form submitted successfully!', success: true, form });
    } catch (error) {
        res.status(500).json({ message: 'Error submitting form', success: false });
    }
}

const getAllPopupForms = async (req, res) => {
    try {
        const forms = await popupFormModel.find().sort({ createdAt: -1 });
        res.status(200).json({ message: 'Forms fetched successfully', success: true, forms });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching forms', success: false });
    }
}

module.exports = {
    submitPopupForm,
    getAllPopupForms,
};
