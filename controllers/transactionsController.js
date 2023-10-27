const express = require("express");
const transactions = express.Router();
const transactionsData = require("../models/transactionsData");

// Index Route
transactions.get("/", (req, res) => {
  res.status(200).json(transactionsData);
});

// Create Route
transactions.post("/", (req, res) => {
  transactionsData.push(req.body);
  res.status(200).json(transactionsData);
});

// Show Route
transactions.get("/:id", (req, res) => {
  const { id } = req.params;
  if (transactionsData[id]) {
    res.status(200).json(transactionsData[id]);
  } else {
    res.status(404).send({ error: "Page Not Found" });
  }
});

// Update Route
transactions.put("/:id", (req, res) => {
  const { id } = req.params;
  transactionsData[id] = req.body;
  if (transactionsData[id]) {
    res.status(200).json(transactionsData);
  } else {
    res.status(404).send({ error: "Page Not Found" });
  }
});

// Delete Route
transactions.delete("/:id", (req, res) => {
  const { id } = req.params;
  if (transactionsData[id]) {
    transactionsData.splice(id, 1);
    res.json(transactionsData);
  } else {
    res.status(404).send({ error: "Page Not Found" });
  }
});

module.exports = transactions;
