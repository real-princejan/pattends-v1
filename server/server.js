import express from "express";
import mysql from "mysql";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "path";
import multer from "multer";
import bcrypt, { hash } from "bcrypt";
import jwt from "jsonwebtoken";

const app = express();
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.static("public"));

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "login",
});

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "_" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({
  storage: storage,
});

con.connect(function (err) {
  if (err) {
    console.log("Error in Connection");
  } else {
    console.log("Database Connected");
  }
});

// LOGIN || POST METHOD
app.post("/login", (req, res) => {
  const sql = "SELECT * FROM users Where email = ? AND password = ?";
  con.query(sql, [req.body.email, req.body.password], (err, result) => {
    if (err)
      return res.json({
        Status: "Error in Server",
        Error: "Error in running query",
      });
    if (result.length > 0) {
      return res.json({ Status: "Success" });
    } else {
      return res.json({
        Status: "Error in Server",
        Error: "Wrong Email or Password",
      });
    }
  });
});

// CREATE TEACHER|| POST METHOD
app.post("/add-teacher", upload.single("image"), (req, res) => {
  const sql =
    "INSERT INTO teacher (`name`,`email`,`password`,`image`) VALUES (?)";
  bcrypt.hash(req.body.password.toString(), 10, (err, hash) => {
    if (err) return res.json({ Error: "Error in hashing password" });
    const values = [req.body.name, req.body.email, hash, req.file.filename];
    con.query(sql, [values], (err, result) => {
      if (err) return res.json({ Error: "Inside signup query" });
      return res.json({ Status: "Success" });
    });
  });
});

// FETCH TEACHERS|| GET METHOD
app.get("/getTeacher", (req, res) => {
  const sql = "SELECT * FROM teacher";
  con.query(sql, (err, result) => {
    if (err) return res.json({ Error: "Get teacher error in sql" });
    return res.json({ Status: "Success", Result: result });
  });
});

// FETCH TEACHER ID || GET METHOD
app.get("/get/:id", (req, res) => {
  const id = req.params.id;
  const sql = "SELECT * FROM teacher where id = ?";
  con.query(sql, [id], (err, result) => {
    if (err) return res.json({ Error: "Get teacher error in sql" });
    return res.json({ Status: "Success", Result: result });
  });
});

// UPDATE TEACHER DETAILS || PUT METHOD
app.put("/update/:id", (req, res) => {
  const id = req.params.id;
  const sql = "UPDATE teacher SET name = ?, email = ? WHERE id = ?";
  con.query(sql, [req.body.name, req.body.email, id], (err, result) => {
    if (err) {
      return res.json({ Error: "Update teacher error in SQL" });
    }
    return res.json({ Status: "Success", Result: result });
  });
});

// DELETE TEACHER || DELETE METHOD
app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  const sql = "DELETE FROM teacher WHERE id = ?";
  con.query(sql, [id], (err, result) => {
    if (err) {
      return res.json({ Error: "Delete teacher error in SQL" });
    }
    return res.json({ Status: "Success", Result: result });
  });
});

app.listen(8081, () => {
  console.log("Running");
});
