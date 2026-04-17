const express = require("express");
const Todo = require("../models/Todo");
const auth = require("../middleware/auth");

const router = express.Router();

router.post("/", auth, async (req, res) => {
  const todo = new Todo({ title: req.body.title, userId: req.user.id });
  await todo.save();
  res.json(todo);
});

router.get("/", auth, async (req, res) => {
  const todos = await Todo.find({ userId: req.user.id });
  res.json(todos);
});

router.put("/:id", auth, async (req, res) => {
  const todo = await Todo.findById(req.params.id);
  if (!todo) return res.status(404).json({ msg: "Not found" });

  if (todo.userId.toString() !== req.user.id)
    return res.status(401).json({ msg: "Unauthorized" });

  todo.completed = req.body.completed ?? todo.completed;
  await todo.save();

  res.json(todo);
});

router.delete("/:id", auth, async (req, res) => {
  const todo = await Todo.findById(req.params.id);
  if (!todo) return res.status(404).json({ msg: "Not found" });

  if (todo.userId.toString() !== req.user.id)
    return res.status(401).json({ msg: "Unauthorized" });

  await todo.deleteOne();
  res.json({ msg: "Deleted" });
});

module.exports = router;