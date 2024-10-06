const express = require("express");

const app = express();

app.get("/", (req,res) => {
    res.send("hey lol")
})

app.post("/", (req,res) => {
    // add user in the db
    res.send("user added in the database")
})

app.patch("/", (req,res) => {
    // update user in the db
    res.send("user updated")
})

app.delete("/", (req,res) => {
    // remove user
    res.send("user deleted")
})

app.listen(3000, ()=>{
    console.log("server is listening on port 3000")
})
