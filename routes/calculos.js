import express from "express";
import pool from "../helpers/database.js";
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const sqlQuery = "SELECT * FROM calculos";
    const result = await pool.query(sqlQuery);
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const sqlQuery =
      "INSERT INTO calculos (conta, resultado, autor, data_criacao) VALUES (?, ?, ?, ?)";
    const result = await pool.query(sqlQuery, [
      req.body.conta,
      req.body.resultado,
      req.body.autor,
      req.body.data_criacao,
    ]);
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
  }
});

export default router;
