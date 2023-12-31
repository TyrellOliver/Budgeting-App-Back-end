const express = require("express");
const app = express();
const cors = require('cors');

app.use(cors());

const transactions = require("./controllers/transactionsController");

app.use(express.json());

app.use("/transactions", transactions);

app.get("/", (req, res) => {
  res.send("App.js Page");
});

app.get("*", (req, res) => {
  res.status(404).send({ error: "Page Not Found" });
});

module.exports = app;
