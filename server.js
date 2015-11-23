"use strict";

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

/* Require packages */
var express = require('./config/express'),
    mongoose = require('./config/mongoose'),
    config = require('./config/config'),
    passport = require('./config/passport');

var app = express();
var db = mongoose();
var passport = passport();

app.listen(config.Port, function(err) {
  if(err) {
    console.log(err);
  }
  else {
    console.log('Server running on port ' + config.Port);
  }
});

module.exports = app;
