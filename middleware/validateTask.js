function validateTask(req, res, next) {

    const { title, completed, category } = req.body;

    // Validate title
    if (!title || title.trim() === "") {
        return res.status(400).json({
            error: "ValidationError",
            details: [
                {
                    field: "title",
                    message: "Title must be a non-empty string"
                }
            ]
        });
    }

    // Validate completed
    if (typeof completed !== "boolean") {
        return res.status(400).json({
            error: "ValidationError",
            details: [
                {
                    field: "completed",
                    message: "Completed must be a boolean"
                }
            ]
        });
    }

    // Validate category
    if (!category || category.trim() === "") {
        return res.status(400).json({
            error: "ValidationError",
            details: [
                {
                    field: "category",
                    message: "Category must be a non-empty string"
                }
            ]
        });
    }

    // Everything is valid, continue to the controller
    next();
}

module.exports = validateTask;