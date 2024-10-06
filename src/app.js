const express = require("express");
const {adminAuth, userAuth} = require("./middlewares/auth")

const app = express();

app.use("/admin", adminAuth)
app.use("/user", userAuth)

app.get("/user", (req,res) => {
    throw new Error("Error")
    res.send("hey user, welcome to your feed")
})

app.get("/admin", (req,res) => {
    res.send("hey admin")
})

app.use("/", (err, req, res, next) => {
    if(err){
        res.status(500).send("Something went wrong")
    }
})

app.listen(3000, ()=>{
    console.log("server is listening on port 3000")
})
