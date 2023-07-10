const { log } = require("console");
const express = require("express");
const https = require("https");
const app = express();

app.get("/", function(req, res){
    const url = "https://official-joke-api.appspot.com/random_joke";
    https.get(url, function(response){
        // console.log(response);
        response.on("data", function(data){
            const jokeData = JSON.parse(data);
            res.write(jokeData.setup);
            res.send();
        })
    });
    // res.send("hello");
});
app.listen(3000, function(){
    console.log("port 3000");
});