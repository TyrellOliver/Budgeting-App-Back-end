const express = require("express");
const app = express();

app.get('/',(req,res)=>{
    res.send('<h1>App.js</h1>')
})

module.exports = app;
