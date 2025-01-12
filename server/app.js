const express = require("express");
const { Pool } = require("pg");
const nodemailer = require("nodemailer");

const app = express();
const port = 3000;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

app.get("/", (req, res) => {
  res.send("Hello from Docker Backend!");
});

app.get("/send-email", async (req, res) => {
  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
  });

  try {    
    await transporter.sendMail({
      from: "test@example.com",
      to: "user@example.com",
      subject: "Test Email",
      text: "This is a test email from Docker setup!",
    });
    res.send("Email sent! ");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error sending email");
  }
});

app.get("/test-error", (req, res) => {
  throw new Error("Test error for production logs");
});

app.get("/users", async (req, res) => {
  const { rows } = await pool.query("SELECT * FROM user");
  console.log(rows);
  res.json(rows);
});

app.post("/users", async (req, res) => {
  const { rows } = await pool.query(
    "INSERT INTO user (name, age) VALUES ('John Doe', 30) RETURNING *"
  );
  console.log(rows);
  res.json(rows);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
