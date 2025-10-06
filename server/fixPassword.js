const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

// Direct connection
const MONGODB_URL = "mongodb+srv://ak9643597126:9z7HdRn2GJVQFsK9@cluster0.g9cs4qb.mongodb.net/ak9643597126?retryWrites=true&w=majority&appName=Cluster0";

async function updateAdminPassword() {
  try {
    await mongoose.connect(MONGODB_URL);
    console.log("Connected to DB");

    // Get admin user
    const User = require("./models/User");
    const admin = await User.findOne({ email: "ak9643597126@gmail.com" });
    
    if (!admin) {
      console.log("Admin not found!");
      return;
    }

    console.log("Admin found:", admin.email);
    console.log("Current password hash:", admin.password);

    // Generate new hash
    const newHash = await bcrypt.hash("admin123", 10);
    console.log("New hash generated:", newHash);

    // Update directly in database
    await User.updateOne(
      { email: "ak9643597126@gmail.com" },
      { password: newHash }
    );

    console.log("✅ Password updated successfully!");
    
    // Verify the update
    const updated = await User.findOne({ email: "ak9643597126@gmail.com" });
    console.log("Updated hash:", updated.password);

    // Test password match
    const isMatch = await bcrypt.compare("admin123", updated.password);
    console.log("Password test result:", isMatch);

    process.exit(0);
  } catch (err) {
    console.error("Error:", err);
    process.exit(1);
  }
}

updateAdminPassword();