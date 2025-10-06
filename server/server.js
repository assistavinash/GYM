require('dotenv').config(); // ✅ Pehle dotenv load karo

const app = require('./app');
const connectDB = require('./db/db');

// Connect to MongoDB
connectDB();



// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
