import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import calculosRouter from "./routes/calculos.js";

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/calculos", calculosRouter);

app.get("/", (req, res) => {
  res.send("Para acessar a API, acesse /calculos");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
