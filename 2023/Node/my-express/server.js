const express =require("express");
const app = express();

app.get("/", function(req, res){
    res.send("hello world !!!");
});

app.get("/about", function(req, res){
    res.send("iwmst");
})

app.listen(3000, function(){
    console.log("Sever started on port 300");
});