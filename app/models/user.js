"use strict";

var mongoose = require('mongoose'),
    bcrypt = require('bcrypt');

// api schema
var userSchema = mongoose.Schema({
  "name": {
    type: String,
    required: true,
    index: true,
    unique: true
  },
  "email": {
    type: String,
    unique: true,
    required: true
  },
  "password": {
    type: String,
    required: true
  }
});

userSchema.pre('save', function(next) {
  var user = this;
  if(user.isModified('password')){
    bcrypt.hash(user.password, 10, function(err, hash) {
      if (err){
        next();
      }
      user.password = hash;
      next();
    });
  } else {
    next();
  }
});

userSchema.methods.authenticate = function(attemptPassword) {
  var user = this;
  return bcrypt.compareSync(attemptPassword, user.password);
};

mongoose.model('User', userSchema);
