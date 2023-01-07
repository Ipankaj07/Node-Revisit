const { Router } = require("express");
const fs = require("fs");
const path = require("path");

const studentRouter = Router();

let data = JSON.parse(
  fs.readFileSync(path.join(__dirname, "../db.json"), "utf-8")
);

studentRouter.post("/addstudent", (req, res) => {
  const { roll_no, name, location, course } = req.body;
  const student = {
    roll_no: roll_no ? roll_no : data.students.length + 1,
    name,
    location,
    course,
  };
  data.students.push(student);
  fs.writeFileSync(path.join(__dirname, "../db.json"), JSON.stringify(data));
  res.status(200).json({ message: "Student added successfully" });
});

studentRouter.get("/", (req, res) => {
  res.status(200).json(data.students);
});

studentRouter.get("/:rollNo", (req, res) => {
  const { rollNo } = req.params;
  const student = data.students.find((student) => student.roll_no == rollNo);
  if (student) {
    res.status(200).json(student);
  } else {
    res.status(404).json({ message: "Student not found" });
  }
});

studentRouter.patch("/:rollNo", (req, res) => {
  const { rollNo } = req.params;
  const student = data.students.find((student) => student.roll_no == rollNo);

  if (student) {
    const { name, location, course } = req.body;
    if (name) {
      student.name = name;
    }
    if (location) {
      student.location = location;
    }
    if (course) {
      student.course = course;
    }
    fs.writeFileSync(path.join(__dirname, "../db.json"), JSON.stringify(data));
    res.status(200).json({ message: "Student updated successfully" });
  } else {
    res.status(404).json({ message: "Student not found" });
  }
});

studentRouter.delete("/:rollNo", (req, res) => {
  const { rollNo } = req.params;
  const student = data.students.find((student) => student.roll_no == rollNo);
  if (student) {
    data.students = data.students.filter(
      (student) => student.roll_no != rollNo
    );
    fs.writeFileSync(path.join(__dirname, "../db.json"), JSON.stringify(data));
    res.status(200).json({ message: "Student deleted successfully" });
  } else {
    res.status(404).json({ message: "Student not found" });
  }
});

module.exports = studentRouter;
