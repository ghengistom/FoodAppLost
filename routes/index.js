var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

/*connect to db*/
mongoose.connect('mongodb://localhost/nodewebappdb');

/* GET home page. */
router.get('/', function(req, res, next) {
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



module.exports = router;
