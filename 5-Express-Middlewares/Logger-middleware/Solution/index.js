const express = require("express");
const app = express();

app.use(express.json());

/* Middleware */
const logger = require("./midddleware/logger.middleware");

app.use(logger);

app.get("/api", (req, res) => {
  res.send("Get Hello World");
});

app.post("/api", (req, res) => {
  res.send("Post Hello World");
});

app.put("/api", (req, res) => {
  res.send("Put Hello World");
});

app.delete("/api", (req, res) => {
  res.send("Delete Hello World");
});

const port = 8080;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
