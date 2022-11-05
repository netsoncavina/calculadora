// Make a calculator REST API
import express from "express";
import bodyParser from "body-parser";
import { add, subtract, multiply, divide } from "./calculator";

const app = express();
app.use(bodyParser.json());

app.post("/add", (req, res) => {
  const { a, b } = req.body;
  const result = add(a, b);
  res.json({ result });
});

app.post("/subtract", (req, res) => {
  const { a, b } = req.body;
  const result = subtract(a, b);
  res.json({ result });
});

app.post("/multiply", (req, res) => {
  const { a, b } = req.body;
  const result = multiply(a, b);
  res.json({ result });
});

app.post("/divide", (req, res) => {
  const { a, b } = req.body;
  const result = divide(a, b);
  res.json({ result });
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
