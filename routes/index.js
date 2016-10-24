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

var images = {
  imagesJSON:[]
};


/* GET home page. */
router.get('/images', function(req, res, next) {
  var filesystem = require("fs");
  var results = [];

// folder containing images
  dir = 'public/images'
  //this will loop through every image
  filesystem.readdirSync(dir).forEach(function(file) {

    //save filepath
    var pathToImg = 'images/'+file;

    //make a javascript object
    var imageHolder = {
      imgSrcHtml: pathToImg,
      imgNameHtml: file
    }
    //stringify the object we are on
    images.imagesJSON.push(imageHolder);

  });

  res.json(images);


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
