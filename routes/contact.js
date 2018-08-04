"use strict"

let express = require('express');
let router = express.Router();
require('dotenv').load();
let node_mailer = require('nodemailer');
var cred = require('../lib/nodemailer');


router.post('/send-contact-form',function (req,res,next) {
  console.log('sending')
  let name = req.body.name
  let email = req.body.email
  let message = req.body.message

  let smtpTransport = node_mailer.createTransport({
    host: 'smtp.sendgrid.net',
    port: 587,
    secure: false,
    auth: {
      user: cred.user,
      pass: cred.pass
    }
  });
  var mailOptions = {
    from: email, // sender address
    to: 'alexandrumpetru@gmail.com', // list of receivers
    subject: name, // Subject line
    text: message //, // plaintext body
    // html: '<b>Hello world ✔</b>' // You can choose to send an HTML body instead
  };

  smtpTransport.sendMail(mailOptions, function(error, info){
    if(error){
      console.log(error);
      res.json({yo: 'error'});
    }else{
      console.log('Message sent: ' + info.response);
      res.json({yo: info.response});
    };
  });
})

module.exports = router;