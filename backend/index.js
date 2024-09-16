const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const connectDb = require("./database");
const cors = require("cors");
const app = express();
dotenv.config();
const userRoutes = require('./routes/userRoutes'); // Ensure correct file path

// Connect to Database
dotenv.config();
require('./database');

// Middleware
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(express.json()); // Parse incoming JSON requests

// Routes
app.use('/api', userRoutes); // Correctly use the routes

// Base route to check server
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Error handling middleware (for CORS issues, etc.)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
