/*exported should, app*/
"use strict";

var app = require('../../server.js'),
    should = require('should'),
    mongoose = require('mongoose'),
    User = mongoose.model('User');

describe('User model Test', function() {

  beforeEach(function(done) {
    var user = new User({
      name: "Bob",
      email: "bob@example.org",
      password: "SuperStrongPassword"
    });
    user.save(function(err) {
      if(!err) {
        done();
      }
    });
  });

  describe('User#save', function() {
    it('should load Bob', function(done) {
      User.findOne({ name: "Bob"}, function(err, doc) {
        doc.email.should.eql("bob@example.org");
        done();
      });
    });
  });

  afterEach(function(done) {
    User.findOneAndRemove({ name: "Bob"}, function(err) {
      if(!err) {
        done();
      }
      else {
        console.log(err);
      }
    });
  });
});
