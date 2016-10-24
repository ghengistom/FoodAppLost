var express = require('express');
var router = express.Router();
//var mongoose = require('mongoose');

/*connect to db*/
//mongoose.connect('mongodb://localhost/nodewebappdb');


//Array to store filepaths to images
var imagePathArray = new Array();



/* GET home page. */
router.get('/', function(req, res, next) {
  var filesystem = require("fs");
  var results = [];

  dir = './public/images' // project root directory
  filesystem.readdirSync(dir).forEach(function(file) {

    file = dir+'/'+file;
    //now turn into json object
    imagePathArray.push(file);
    console.log(file);
  });

  //res.render('costumes', { title: 'Costumes' });

  res.render('index', { title: 'Muncher App!' });
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
