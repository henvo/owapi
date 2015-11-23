"use strict";

var express = require('express'),
    morgan = require('morgan'),
    compress = require('compression'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    passport = require('passport'),
    session = require('express-session'),
    config = require('./config');

module.exports = function() {
  var app = express();

  if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
  } else if(process.env.NODE_ENV === 'production') {
    app.use(compress());
  }

  app.use(bodyParser.urlencoded({
     extended: true
  }));

  app.use(bodyParser.json());
  app.use(methodOverride());

  app.use(session({
    saveUninitialized: true,
    resave: true,
    secret: config.secret
  }));

  app.set('views', './app/views');
  app.set('view engine', 'ejs');

  app.use(passport.initialize());
  app.use(passport.session());


  /* require app and routes here */
  app.use('/', require('../app/'));

  /* Require static files from public folder */
  app.use('/static', express.static(__dirname + '/../public'));

  return app;

};
