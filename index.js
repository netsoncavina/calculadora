// Make a calculator REST API
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
// import { add, subtract, multiply, divide } from "./calculator.js";

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  let historico = [
    {
      entrada: "2+2",
      saida: "4",
      autor: "Netson",
      data: "2021-03-01",
    },
    {
      entrada: "2-2",
      saida: "0",
      autor: "Netson",
      data: "2021-03-01",
    },
    {
      entrada: "2*2",
      saida: "4",
      autor: "Netson",
      data: "2021-03-01",
    },
  ];
  res.send(historico);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
