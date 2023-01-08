const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  title: String,
  completed: Boolean,
  tag: String,
  notedDate: { type: Date, default: Date.now },
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;