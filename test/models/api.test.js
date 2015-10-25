/*exported should*/
"use strict";

var should = require('should'),
    mongoose = require('mongoose'),
    API = mongoose.model('API');

describe('API model Test', function() {

  beforeEach(function(done) {
    var api = new API({
      name: "Example",
      status: "active",
      info: "Example API",
      admin: mongoose.Types.ObjectId(),
      resources: {}
    });
    api.save(function(err) {
      if(!err) {
        done();
      }
    });
  });

  describe('API#save', function() {
    it('should load example api', function(done) {
      API.findOne({ name: "Example"}, function(err, doc) {
        doc.status.should.eql("active");
        done();
      });
    });
  });

  afterEach(function(done) {
    API.findOneAndRemove({ name: "Example"}, function(err) {
      if(!err) {
        done();
      }
      else {
        console.log(err);
      }
    });
  });
});
