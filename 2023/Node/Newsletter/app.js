const express = require("express");
const app = express();
const https = require("https");

app.get("/", function(req, res){
    res.sendFile(__dirname+"/signup.html");
    // res.send("Hello");
});

app.post("/", function(req, res){
    res.send("hello");
});

app.listen(3000, function(){
    console.log("port 3000");
});