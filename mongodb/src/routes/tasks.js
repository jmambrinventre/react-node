const express = require("express");
const tasks = require("../models/tasks");
const tasksSchema = require("../models/tasks");

const router = express.Router();

// create task
router.post("/tasks", (req, res) => {
  const tasks = tasksSchema(req.body);
  tasks
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get all tasks
router.get("/tasks", (req, res) => {
  tasksSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get a task
router.get("/tasks/:id", (req, res) => {
  const { id } = req.params;
  tasksSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// delete a task
router.delete("/tasks/:id", (req, res) => {
  const { id } = req.params;
  tasksSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// update a task
router.put("/tasks/:id", (req, res) => {
    const { id } = req.params;
    const { name, description } = req.body;
    rolesSchema
        .updateOne({ _id: id }, { $set: { name, description } })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

module.exports = router;