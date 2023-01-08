const { Router } = require("express");

const Todo = require("../models/todo.model");

const todoRouter = Router();

todoRouter.post("/create", async (req, res) => {
  try {
    const todo = await Todo.create(req.body);
    res.status(201).json(todo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

todoRouter.get("/", async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// PUT / PATCH

todoRouter.patch("/:todoId", async (req, res) => {
  try {
    const todo = await Todo.findByIdAndUpdate(req.params.todoId, req.body, {
      new: true,
    });
    res.status(200).json(todo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

todoRouter.put("/:todoId", async (req, res) => {
  try {
    const todo = await Todo.findByIdAndUpdate(req.params.todoId, req.body, {
      new: true,
    });
    res.status(200).json(todo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

todoRouter.delete("/:todoId", async (req, res) => {
  try {
    await Todo.findByIdAndDelete(req.params.todoId);
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = todoRouter;