"use strict"

let express = require('express');
let router = express.Router();

/* GET portfolio */
router.get('/portfolio-one', function(req, res, next) {
  res.render('portfolio/portfolio-one');
});
router.get('/portfolio-two', function(req, res, next) {
  res.render('portfolio/portfolio-two');
});
router.get('/portfolio-three', function(req, res, next) {
  res.render('portfolio/portfolio-three');
});

module.exports = router;
