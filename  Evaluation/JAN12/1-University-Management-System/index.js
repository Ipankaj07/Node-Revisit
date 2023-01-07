const express = require("express");
const app = express();

app.use(express.json());

const logger = require("./middlewares/logger.middleware");
const studentRouter = require("./routes/student.route");
const teacherRouter = require("./routes/teacher.route");

app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/students", studentRouter);
app.use("/teachers", teacherRouter);

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
