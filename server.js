//jshint  esversion:6
const express = require("express");
// making a variable and requiring it 
const bodyParser=require("body-parser");
const app=express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));


app.get("/",function(req,res){
    res.send("Hello There <ul><li>Go to /average for the calculations</li><li>/name route for seeing a message </li></li> /frontend for my html file </ul>");
});
app.get("/average",function(req,res){
    res.sendFile(__dirname + "/index.html");
});
app.post("/average",function(req,res){
var num1=Number(req.body.num1);
var num2=Number(req.body.num2);
var num3=Number(req.body.num3);
var result=(num1+num2+num3)/3;
    res.send("The result of calculation is "+ result);
});

app.get("/frontend",function(req,res){
    res.sendFile(__dirname + "/restraunt.html");
});


app.get("/:name",function(req,res){
    res.send("Hi : "+req.params.name);
    console.log(req.params);
});
app.listen(3500, function(){
    console.log("server started at 3500 port ");
});
