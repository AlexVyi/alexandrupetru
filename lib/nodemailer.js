"use strict"
require('dotenv').load();

module.exports = {
  user:'apikey',
  pass: process.env.SENGRID_KEY
};