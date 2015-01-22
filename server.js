var express = require("express")
var app = express();


var Alivn = {
  "profession": "singer",
  "known_for": ["Back teacher", "Runner,Runner"],
  "gender": "male",
  "first letter of first name": "j",
  "extra hint": "Handsome!!"
}

//var msg={};

app.get("/",function(req,res){
  res.json(Alivn);
});

app.get("/Justin_Timberlake",function(req,res){
  var msg = {correct:"wowowo!! nice job!"}
  res.json (msg);


});


app.get("/:id",function(req,res){
  var msg = {incorrect:"opppps!! please try again"}
  res.json(msg);


});

app.listen(3000);
