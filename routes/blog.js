"use strict"

let express = require('express');
let router = express.Router();
let mongoose =require('mongoose');
let Post = require('../schemas/post-schema');

mongoose.connect('mongodb://alex%40vps1:iepurelefugeadevulpe@94.130.109.19:2657/BLOG',{ useNewUrlParser: true }, function (err) {
    if(err) throw  err;
  console.log('connected to BLOG')
});
/* GET posts  */
router.get('/blog-tech-category', function(req, res, next) {
  res.send('hello blog');//THIS ROUTE REDIRECTS FROM THE MAIN BLOG VIEW TO THE MAIN SUB_ARTICLES
});
router.get('/blog-miscellaneous-category', function(req, res, next) {
  res.send('hello miscellaneous blog');//THIS ROUTE REDIRECTS FROM THE MAIN BLOG VIEW TO THE MAIN SUB_ARTICLES
});

router.post('/add-post', function (req,res,next) {
  var postData = new Post({
    title:req.body.title,
    post:req.body.post,
    category:req.body.category
  });
  postData.save().then(function (result) {
    res.redirect('/blog');
  }).catch(function (err) {
    res.status(400).send("Unable to save data");
  });
});


module.exports = router;