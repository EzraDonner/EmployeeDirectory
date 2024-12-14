// TODO: this file :)
const express = require("express");
const app = express();
const employees = require("./employees");

const init = async () => {
  app.listen(3000, () => console.log("I am listening on port 3000"));
};

app.get("/", async (req, res) => {
  res.status(200).send("Hello, employees");
});

app.get("/employees", async (req, res) => {
  res.status(200).json(employees);
});

app.get("/employees/random", async (req, res) => {
  const random = Math.floor(Math.random() * 10);
  const randomEmployeeId = employees[random];
  res.status(200).json(randomEmployeeId);
});

app.get("/employees/:id", async (req, res) => {
  const id = req.params.id;
  const employeeId = employees[id - 1];
  if (employees[id - 1]) res.status(200).json(employeeId);
  else res.status(404).send("404 not found");
});

init();
