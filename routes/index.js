var express = require('express');
var router = express.Router();
//var mongoose = require('mongoose');

/*connect to db*/
//mongoose.connect('mongodb://localhost/nodewebappdb');


router.get('/', function(req, res, next) {
    res.render('index', {
       title: 'Muncher App!'
  });
});


//Array to store filepaths to images
//var imagePathArray = new Array();
//var obj;

//create a big string to append little strings to
//so i can return the big string
var bigImageString = "null";

/* GET home page. */
router.get('/images', function(req, res, next) {
  var filesystem = require("fs");
  var results = [];

// folder containing images
  dir = './public/images'
  //this will loop through every image
  filesystem.readdirSync(dir).forEach(function(file) {

    //save filepath
    var pathToImg = dir+'/'+file;

    //make a javascript object
    var imageHolder = {
      imgSrcHtml: pathToImg,
      imgNameHtml: file
    }

    if(bigImageString==null)
    {
      bigImageString = JSON.stringify(imageHolder);
    }
    else
    {
      bigImageString.concat(individualImage);
    }


    //stringify the object we are on
    var individualImage = JSON.stringify(imageHolder);

    console.log(individualImage);

    //append this to big ass stringify


    //take this beast send it to client parsed out


    //obj = JSON.stringify(file);
    //console.log(obj);
    //store each path into an array
    //imagePathArray.push(obj);
    //need to convert each index/path into json object
  //  console.log(file);
  });
  console.log(bigImageString);

  res.json(JSON.parse(bigImageString));


//inside routes file create a get method at uri"/images"
//	inside get method
//		call function to get array of json objects



});


router.get('/signin', function(req, res, next) {
  res.render('signin', {
    title: 'Signin'
  });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', {
    title: 'Contact'
  });
});






router.get('/', function(req, res, next) {

  var filesystem = require("fs");
  var results = [];

  dir = '.' // project root directory
  filesystem.readdirSync(dir).forEach(function(file) {

    file = dir+'/'+file;
    console.log(file);
  });

  res.render('costumes', { title: 'Costumes' });

});










module.exports = router;
