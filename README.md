# Task API

A simple RESTful Task Management API built using **Node.js** and **Express.js**.

This API allows users to create, retrieve, update, delete, and filter tasks. It uses in-memory storage, so data is reset whenever the server restarts.

---

# Features

- Create a new task
- Retrieve all tasks
- Retrieve a task by ID
- Update an existing task
- Delete a task
- Filter tasks by completion status
- Input validation
- Modular project structure using Routes, Controllers, Middleware, and Data

---

# Technologies Used

- Node.js
- Express.js

---

# Project Structure

```
task-api/
│
├── app.js
├── package.json
│
├── controllers/
│   └── taskController.js
│
├── routes/
│   └── taskRoutes.js
│
├── middleware/
│   └── validateTask.js
│
├── data/
│   └── tasks.js
│
└── README.md
```

---

# Installation

Clone the repository:

```bash
git clone <repository-url>
```

Move into the project folder:

```bash
cd task-api
```

Install dependencies:

```bash
npm install
```

---

# Running the Server

Start the server:

```bash
node app.js
```

You should see:

```
Server running on http://localhost:3000
```

---

# API Endpoints

## Home

### GET /

Returns a welcome message.

Response:

```
Welcome to my Task API!
```

---

## Get All Tasks

### GET /tasks

Returns all tasks.

---

## Filter Tasks

### GET /tasks?completed=true

Returns only completed tasks.

### GET /tasks?completed=false

Returns only incomplete tasks.

---

## Get Task By ID

### GET /tasks/:id

Example:

```
GET /tasks/1
```

Returns a single task.

If the task does not exist:

```
404 Not Found
```

---

## Create Task

### POST /tasks

Example Request Body:

```json
{
    "title": "Study Express",
    "completed": false,
    "category": "Programming"
}
```

Returns:

```
201 Created
```

---

## Update Task

### PUT /tasks/:id

Example:

```
PUT /tasks/1
```

Example Body:

```json
{
    "title": "Master Express",
    "completed": true,
    "category": "Programming"
}
```

Returns the updated task.

---

## Delete Task

### DELETE /tasks/:id

Example:

```
DELETE /tasks/1
```

Returns:

```
204 No Content
```

---

# Validation

The API validates:

- Title must be a non-empty string.
- Completed must be a boolean.
- Category must be a non-empty string.
- Query parameter `completed` must be either `true` or `false`.

Invalid requests return:

```
400 Bad Request
```

---

# HTTP Status Codes

| Status Code | Meaning |
|-------------|---------|
| 200 | OK |
| 201 | Created |
| 204 | No Content |
| 400 | Bad Request |
| 404 | Not Found |

---

# Notes

- This project uses **in-memory storage**.
- Tasks are not saved permanently.
- Restarting the server resets all task data.

---

# Author

Abhigyan Dey