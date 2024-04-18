const express = require('express');
const { connectionToDb } = require('./config/dbConfig');
const app = express();

app.get("/", (req,res)=>{
    res.send("Working fine!")
});


app.listen(8080, async()=>{
    await connectionToDb();
    console.log("App is running at port 8080");
})