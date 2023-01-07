const { Router } = require("express");
const fs = require("fs");
const path = require("path");

const teacherRouter = Router();

let data = JSON.parse(
  fs.readFileSync(path.join(__dirname, "../db.json"), "utf-8")
);

teacherRouter.post("/addteacher", (req, res) => {
  const { emp_id, name, sub, exp } = req.body;
  const teacher = {
    emp_id: emp_id ? emp_id : data.teachers.length + 1,
    name,
    sub,
    exp,
  };
  data.teachers.push(teacher);
  fs.writeFileSync(path.join(__dirname, "../db.json"), JSON.stringify(data));
  res.status(200).json({ message: "Teacher added successfully" });
});

teacherRouter.get("/", (req, res) => {
  res.status(200).json(data.teachers);
});

teacherRouter.get("/:empID", (req, res) => {
  const { empID } = req.params;
  const teacher = data.teachers.find((teacher) => teacher.emp_id == empID);
  if (teacher) {
    res.status(200).json(teacher);
  } else {
    res.status(404).json({ message: "Teacher not found" });
  }
});

module.exports = teacherRouter;
