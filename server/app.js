const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const passwordResetRoutes = require('./routes/passwordResetRoutes');
const adminRoutes = require('./routes/adminRoutes');
const gymEnquiryRoutes = require('./routes/gymEnquiryRoutes');
const classRoutes = require('./routes/classRoutes');
const userRoutes = require('./routes/userRoutes');
const trainerRoutes = require('./routes/trainerRoutes');
const popupFormRoutes = require('./routes/popupFormRoutes');
const contactRoutes = require('./routes/contactRoutes');
const cors = require('cors');

const app = express();

app.use(cors({  credentials: true }));

// Security headers for Google OAuth
app.use((req, res, next) => {
    res.setHeader('Cross-Origin-Opener-Policy', 'same-origin-allow-popups');
    res.setHeader('Cross-Origin-Embedder-Policy', 'unsafe-none');
    next();
});

app.get('/', (req, res) => {
    res.send('API is running...');
});
app.use(express.json());
app.use(bodyParser.json());
app.use(cookieParser());

app.use('/api/auth', authRoutes);
app.use('/api/auth', passwordResetRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/enquiry', gymEnquiryRoutes);
app.use('/api/classes', classRoutes);
app.use('/api/users', userRoutes);
app.use('/api/trainers', trainerRoutes);
app.use('/api/popup-form', popupFormRoutes);
app.use('/api/contact', contactRoutes);

module.exports = app;
