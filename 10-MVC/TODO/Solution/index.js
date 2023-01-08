require("dotenv").config();
const express = require("express");
const db = require("./configs/db");
const port = process.env.PORT || 8080;

const todoRouter = require("./routes/todo.route");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Welcome to TODO App" });
});

app.use("/todos", todoRouter);

app.listen(port, async () => {
  await db();
  console.log(`Server is running on port ${port}`);
});