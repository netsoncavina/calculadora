import mariadb from "mariadb";

const pool = mariadb.createPool({
  host: "localhost",
  user: "root",
  password: "abc123",
  database: "l5",
  connectionLimit: 5,
});

pool.getConnection((err, connection) => {
  if (err) {
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
      console.error("Database connection was closed.");
    }
    if (err.code === "ER_CON_COUNT_ERROR") {
      console.error("Database has too many connections.");
    }
    if (err.code === "ECONNREFUSED") {
      console.error("Database connection was refused.");
    }
  }
  if (connection) connection.release();
  return;
});

export default pool;
