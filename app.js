const express = require("express");

// Create the Express application
const app = express();

// Import the task routes
const taskRoutes = require("./routes/taskRoutes");

// Middleware to parse incoming JSON requests
app.use(express.json());

// Register all task routes
app.use("/", taskRoutes);

// Port number
const PORT = 3000;

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});