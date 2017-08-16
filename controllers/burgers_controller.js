var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
//var db = require("../models/burger.js");

var db = require('../models');

var path = require('path');
//var db = require('db');


// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  db.Burger.findAll().then(function(data){
    //   var hbsObject = {
    //   burgers: data
    // };
    // console.log(hbsObject);
    res.render("index", {burgers: data});
  }) 
});



// this function will create a new burger in our database
// and set it's "devaured" var into true or false

router.post('/', function(req,res) {
  db.Burger.create({

   burger_name: req.body.name,
   devoured: req.body.sleepy

  }).then(function(data){
    res.redirect('/');
  })
});





// router.post("/", function(req, res) {
//   burger.create([
//     "burger_name", "devaured"
//   ], [
//     req.body.name, req.body.sleepy
//   ], function() {
//     res.redirect("/");
//   });
// });


// whis will catch the user input
// and call update function from burger.js file


router.put('/:id', function(req,res){
  var burgerId = req.params.id;
  db.Burger.update({
    devoured: req.body.sleepy
  }, 
  {
    where: {
      id: burgerId
    }
  }).then(function(){
    res.redirect('/');
  });
});




// router.put("/:id", function(req, res) {
//   var condition = "id = " + req.params.id;

//   console.log("condition", condition);


// // calling this function: update: function(objColVals, condition, cb)
//   burger.update({
//     devaured: req.body.sleepy
//   }, condition, function() {
//     res.redirect("/");
//   });
// });





// Export routes for server.js to use.
module.exports = router;














