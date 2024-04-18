const express = require('express');
const { connectionToDb } = require('./config/dbConfig');
const { userRouter } = require('./routes/user.route');
const app = express();

app.use(express.json());

app.get("/", (req,res)=>{
    res.send("Working fine!")
});

app.use("/users", userRouter)

app.listen(8080, async()=>{
    await connectionToDb();
    console.log("App is running at port 8080");
})