console.log("Admin creation script started");

const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

console.log("Modules loaded");

// Simple connection without dotenv first
const MONGODB_URL = "mongodb+srv://ak9643597126:9z7HdRn2GJVQFsK9@cluster0.g9cs4qb.mongodb.net/ak9643597126?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(MONGODB_URL)
  .then(() => {
    console.log("DB connected");
    createAdminUser();
  })
  .catch((err) => {
    console.error("DB connection error:", err);
    process.exit(1);
  });

async function createAdminUser() {
  try {
    console.log("Creating admin user...");
    
    const User = require("./models/User");
    
    // Delete existing admin
    await User.deleteOne({ email: "ak9643597126@gmail.com" });
    console.log("Removed existing admin");

    // Hash password
    const hashedPassword = await bcrypt.hash("admin123", 10);
    console.log("Password hashed");
    
    // Create admin user
    const adminUser = new User({
      name: "Admin",
      email: "ak9643597126@gmail.com",
      password: hashedPassword,
      phone: "9999999999",
      role: "admin",
      isVerified: true
    });

    await adminUser.save();
    console.log("✅ Admin user created successfully!");
    console.log("📧 Email: ak9643597126@gmail.com");
    console.log("🔐 Password: admin123");
    
    process.exit(0);
  } catch (err) {
    console.error("❌ Error creating admin:", err);
    process.exit(1);
  }
}