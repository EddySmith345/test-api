const tasks = require("../data/tasks");

// ======================================================
// GET - Retrieve all tasks (with optional completed filter)
// ======================================================

function getAllTasks(req, res) {

    // Get the completed query parameter
    const completed = req.query.completed;

    // If no filter is provided, return all tasks
    if (completed === undefined) {
        return res.json(tasks);
    }

    // Validate the query parameter
    if (completed !== "true" && completed !== "false") {
        return res.status(400).json({
            error: "ValidationError",
            details: [
                {
                    field: "completed",
                    message: "Completed query parameter must be 'true' or 'false'"
                }
            ]
        });
    }

    // Convert the query parameter to a boolean
    const isCompleted = completed === "true";

    // Filter the tasks
    const filteredTasks = tasks.filter(task => {
        return task.completed === isCompleted;
    });

    // Return the filtered tasks
    return res.json(filteredTasks);
}

// ======================================================
// GET - Retrieve a single task by ID
// ======================================================

function getTaskById(req, res) {

    // Get the task ID from the URL
    const id = Number(req.params.id);

    // Find the task
    const task = tasks.find(task => task.id === id);

    // Return 404 if task does not exist
    if (task === undefined) {
        return res.status(404).json({
            error: "Task not found"
        });
    }

    // Return the task
    return res.json(task);
}

// ======================================================
// POST - Create a new task
// ======================================================

function createTask(req, res) {

    // Get the data from the request body
    const { title, completed, category } = req.body;

    // Generate a new ID
    const newId = tasks[tasks.length - 1].id + 1;

    // Create the new task
    const newTask = {
        id: newId,
        title,
        completed,
        category
    };

    // Add the task to the array
    tasks.push(newTask);

    // Return the created task
    return res.status(201).json(newTask);
}

// ======================================================
// PUT - Update an existing task
// ======================================================

function updateTask(req, res) {

    // Get the task ID from the URL
    const id = Number(req.params.id);

    // Find the task
    const task = tasks.find(task => task.id === id);

    // Return 404 if task does not exist
    if (task === undefined) {
        return res.status(404).json({
            error: "Task not found"
        });
    }

    // Get the updated data from the request body
    const { title, completed, category } = req.body;

    // Update the task
    task.title = title;
    task.completed = completed;
    task.category = category;

    // Return the updated task
    return res.json(task);
}

// ======================================================
// DELETE - Delete an existing task
// ======================================================

function deleteTask(req, res) {

    // Get the task ID
    const id = Number(req.params.id);

    // Find the index of the task
    const index = tasks.findIndex(task => task.id === id);

    // Return 404 if task does not exist
    if (index === -1) {
        return res.status(404).json({
            error: "Task not found"
        });
    }

    // Remove the task
    tasks.splice(index, 1);

    // Return 204 No Content
    return res.status(204).send();
}

module.exports = {
    getAllTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask
};