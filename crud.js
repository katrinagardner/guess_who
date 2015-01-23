var express = require("express")
var app = express();
var array=[];

app.get('/create/:name/:pet_type',function(req,res){
  //if(req.params.method==="create"){
    var data ={
    "pet_name": req.params.name,
    "pet_type": req.params.pet_type
  }
  array.push(data);
  console.log(array);
  res.send(array);
  //}
});


app.get('/read/:pet_name',function(req,res){

  var obj = {msg:"no name existing"}  // this is accessable from if statement.

    array.forEach(function(animal){
      if(animal.pet_name === req.params.pet_name){
        obj.msg=req.params.pet_name;
      }
  });
  res.send(obj.msg);

});


app.get('/update/:pet_name/:new_pet_name',function(req,res){

  //if(req.params.method==="update"){

    var current = req.params.pet_name;
    var new_name = req.params.new_pet_name;


    array.forEach(function(pet){
      if(pet.pet_name === current){
        pet.pet_name = new_name;
        console.log(new_name);
      }
    });
    res.send(array);
    console.log(array)
  });

app.get('/destory/:pet_name',function(req,res){

  var pet_loc = req.params.pet_name;


  array.forEach(function(pet){

    var pet_revm = array.indexOf(pet);


    if(pet_loc === pet.pet_name){
      array.splice(pet_revm, 1);
    }
  })

  res.send("Remove " + pet_loc);
});

app.get('/all_pets',function(req,res){

  res.send(array);

});

app.listen(3000);
