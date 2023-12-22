const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

// Routes for tasks
router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.json({ message: error.message });
  }
});

router.post('/', async (req, res) => {
  const task = new Task({
    title: req.body.title,
    description: req.body.description,
    completed: req.body.completed,
  });

  try {
    const savedTask = await task.save();
    res.json(savedTask);
  } catch (error) {
    res.json({ message: error.message });
  }
});

// Other CRUD routes...

module.exports = router;
