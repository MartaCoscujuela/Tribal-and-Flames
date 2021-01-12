const express = require("express");
const path = require("path");

const app = express();

app.use("/", express.static(path.join(__dirname, "angular")));

app.use("/api", (req, res, next)=>{
  res.status(400).json({
   message: "message",
   env: process.env.NODE_ENV
  });
});

app.use((req, res, next)=>{
  res.sendFile(path.join(__dirname, "angular", "index.html"));
});

module.exports = app;
