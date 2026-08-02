const express = require("express");
const router = express.Router();

const validateTask = require("../middleware/validateTask");

const {
    getAllTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask
} = require("../controllers/taskController");

// ======================================================
// Home route
// ======================================================

router.get("/", (req, res) => {
    res.send("Welcome to my Task API!");
});

// ======================================================
// GET - Retrieve all tasks
// ======================================================

router.get("/tasks", getAllTasks);

// ======================================================
// GET - Retrieve a single task by ID
// ======================================================

router.get("/tasks/:id", getTaskById);

// ======================================================
// POST - Create a new task
// ======================================================

router.post("/tasks", validateTask, createTask);

// ======================================================
// PUT - Update an existing task
// ======================================================

router.put("/tasks/:id", validateTask, updateTask);

// ======================================================
// DELETE - Delete an existing task
// ======================================================

router.delete("/tasks/:id", deleteTask);

module.exports = router;