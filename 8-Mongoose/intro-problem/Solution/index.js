const express = require("express");
const db = require("./config/db");
const movieRouter = require("./routes/movie.route");
const port = 8080;

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Welcome to MovieDB" });
});

app.use("/movies", movieRouter);

app.listen(port, async () => {
  await db();
  console.log(`Server is running on port ${port}`);
});