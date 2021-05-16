const express = require("express");

const app = express();
const db = require("./db");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server working 🔥");
});

const port = process.env.PORT || 5000;

app.listen(port, () => "Server running on port 🔥");
