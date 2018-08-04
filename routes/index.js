"use strict"

let express = require('express');
let router = express.Router();
let Post = require('../schemas/post-schema')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get("/blog", function (req,res,next) {
  Post.find({}, function(err, posts) {
    res.render('blog', { posts: posts})
  });
});

router.get('/about', function(req, res, next) {
  res.render('about');
});

router.get('/contact', function(req, res, next) {
  res.render('contact');
});



module.exports = router;
