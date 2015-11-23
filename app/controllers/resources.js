"use strict";

module.exports = {

  create: function(req, res) {
    var newResource = new req.Resource(req.body);
    newResource.save(function(err, data) {
      if(err) {
        res.status(500).json({
          "success": false,
          "data": null,
          "message": err
        });
      }
      else {
        res.json({
          "success": true,
          "data": data,
          "message": null
        });
      }
    });
  },
  read: function(req, res) {
    req.Resource.find({ "_id": req.params.resourceId }, function(err, doc) {
      if(err) {
        res.status(500).json({
          "success": false,
          "data": null,
          "message": err
        });
      }
      else {
        res.json({
          "success": true,
          "data": doc,
          "message": null
        });
      }
    });
  },
  update: function(req, res) {
    res.status(501).json({
      "success": false,
      "data": null,
      "message": "Feature is not implemented yet."
    });
  },
  list: function(req, res) {
    req.Resource.find({}, function(err, docs) {
      if(err) {
        res.status(500).json({
          "success": false,
          "data": null,
          "message": err
        });
      } else {
        res.json({
          "success": true,
          "data": docs,
          "message": null
        });
      }
    });
  },
  remove: function(req, res) {
    req.Resource.findByIdAndRemove({ "_id": req.params.resourceId }, function(err) {
      if(err) {
        res.status(500).json({
          "success": false,
          "data": null,
          "message": err
        });
      }
      else {
        res.json({
          "success": true,
          "data": null,
          "message": "Successfully deleted."
        });
      }
    });
  }
};
