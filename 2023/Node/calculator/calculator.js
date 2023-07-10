const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}))


app.get("/",(req, res)=>{
    // res.send("Hello world!!!!!!");
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
    var one = Number(req.body.num1);
    var two = Number(req.body.num2);
    var result = one + two;
    res.send("The result is " + result); 
});

app.get("/bmicalculator", function(req,res){
    res.sendFile(__dirname+"/bmiCalculator.html");
});
app.post("/bmicalculator", function(req, res){
    var one = Number(req.body.n1);
    var two = Number(req.body.n2);
    var result = one + two;
    res.send("Your BMI is " + result); 
});
app.listen(3000, ()=>{
    console.log("port 3000");
});