const express = require("express");
const app = express();
const https = require("https");

app.use(express.static("public"));
app.use(express.urlencoded());
app.get("/", function(req, res){
    res.sendFile(__dirname+"/signup.html");
    // res.send("Hello");
});

app.post("/", function(req, res){
    const firstName = req.body.first;
    const familyName = req.body.family;
    const email = req.body.email;
    const data = {
        members:[
            {
                email_address: email,
                status: "subscribed",
                merge_fields:{
                    FNAME:firstName,
                    LNAME:familyName

                }
            }
        ]
    };
    const jsonData = JSON.stringify(data);
    const url = "https://us17.api.mailchimp.com/3.0/lists/9b9598a672";
    const options = {
        method: "POST",
        //memo
        auth: "test:api"
    };
    const request = https.request(url, options, function(response){
        if (res.statusCode === 200){
            res.sendFile(__dirname+"/success.html");
            console.log("ok");
        }
        else{
            res.sendFile(__dirname+"/failure.html");
            console.log("no");
        }
        response.on("data", function(data){
            console.log(JSON.parse(data));
        })
    });
    request.write(jsonData);
    request.end();
});

app.post("/failure", function(req, res){
    res.redirect('/');

})

app.listen(3000, function(){
    console.log("port 3000");
});