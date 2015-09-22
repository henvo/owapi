var mongoose = require('mongoose')

module.exports = {

  create: function(req, res) {
    if(!req.api.resources) req.api.resources = {}
    req.api.resources[req.body.name] = req.body.schema
    req.api.markModified('resources')
    req.api.save(function (err) {
      if(err) {
        res.status(400).json({
          "success": false,
          "data": null,
          "message": err
        })
      }
      else {
        res.json({
          "success": true,
          "data": req.api,
          "message": null
        })
      }
    })
  },
  read: function(req, res) {
    res.json({
      "success": true,
      "data": req.api.resources[req.params.resourceName],
      "message": null
    })
  },
  update: function(req, res) {
    res.status(501).json({
      "success": false,
      "data": null,
      "message": "This function is not available"
    })
  },
  list: function(req, res) {
    res.json({
      "success": false,
      "data": req.api.resources,
      "message": null
    })
  },
  remove: function(req, res) {
    delete req.api.resources[req.params.resourceName]
    req.api.markModified('resources')
    req.api.save(function (err) {
      if(err) {
        res.status(500).json({
          "success": false,
          "data": null,
          "message": err
        })
      }
      else {
        mongoose.connection.collections[req.modelName].drop( function(err) {
          if(err) {
            res.status(500).json({
              "success": false,
              "data": null,
              "message": err
            })
          } else {
            res.json({
              "success": true,
              "data": req.api,
              "message": null
            })
          }
        })
      }
    })
  }

}
