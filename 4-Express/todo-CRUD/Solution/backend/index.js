const express = require("express");
const fs = require("fs");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

let todos = fs.readFileSync("db.json", "utf-8");
todos = JSON.parse(todos);

app.get("/", (req, res) => {
  res.json(todos.data);
});

app.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const todo = todos.data.find((todo) => todo.id === id);
  if (todo) {
    res.json(todo);
  } else {
    res.status(404).json({ error: "Todo not found" });
  }
});

app.post("/", (req, res) => {
  const body = req.body;
  if (!body.title) {
    return res.status(400).json({
      error: "title missing",
    });
  }

  const todo = {
    title: body.title,
    completed: false,
    id: Math.floor(Math.random() * 1000000),
  };

  todos.data = todos.data.concat(todo);
  fs.writeFile("db.json", JSON.stringify(todos), (err) => {
    if (err) throw err;
  });

  res.json(todo);
});

app.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const body = req.body;
  const todo = todos.data.find((todo) => todo.id === id);
  if (!todo) {
    return res.status(404).json({ error: "Todo not found" });
  }

  const updatedTodo = { ...todo, completed: body.completed };

  todos.data = todos.data.map((todo) => (todo.id !== id ? todo : updatedTodo));
  fs.writeFile("db.json", JSON.stringify(todos), (err) => {
    if (err) throw err;
    res.status(200).json(updatedTodo);
  });
});

app.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  todos.data = todos.data.filter((todo) => todo.id !== id);
  fs.writeFile("db.json", JSON.stringify(todos), (err) => {
    if (err) throw err;
    res.status(200).json({ message: "Todo deleted" });
  });
});

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
