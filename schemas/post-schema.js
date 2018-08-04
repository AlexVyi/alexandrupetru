"use strict"
let mongoose =require('mongoose');
let Schema = mongoose.Schema;//Schema is a built in object of mongoose


let postSchema = new Schema({
  title: String,
  body: String
});

module.exports = mongoose.model('Post', postSchema);