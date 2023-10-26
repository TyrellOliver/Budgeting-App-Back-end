const express = require('express')
const transactions = express.Router()
const transactionsData = require('../models/transactionsData');

transactions.get('/',(req,res)=>{
    res.send('<h1>The Transactions Route</h1>')
})


module.exports= transactions;