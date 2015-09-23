var API = require('mongoose').model('API')

module.exports = {

  create: function(req, res) {
    var newAPI = new API(req.body)
    newAPI.admin = req.user._id
    newAPI.save(function(err, doc) {
      if(err) {
        res.status(400).json({
          "success": false,
          "data": null,
          "message": err
        })
      } else {
        res.json({
          "sucess": true,
          "data": doc,
          "message": null
        })
      }
    })
  },
  read: function(req, res) {
    res.json({
      "success": true,
      "data": req.api,
      "message": null
    })
  },
  update: function(req, res) {
    res.status(501).json({
      "success": false,
      "data": null,
      "message": "This function is not supported by now."
    })
  },
  list: function(req, res) {
    API.find({}, function(err, docs) {
      if(err) {
        res.status(500).json({
          "success": false,
          "data": null,
          "message": err
        })
      }
      else {
        res.json({
          "sucess": true,
          "data": docs,
          "message": null
        })
      }
    })
  },
  remove: function(req, res) {
    API.findOneAndRemove({
      "name": req.params.apiName
    }, function(err) {
      if(err) {
        res.status(400).json({
          "sucess": false,
          "data": null,
          "message": err
        })
      }
      else {
        res.json({
          "success": true,
          "data": null,
          "message": "Successfully deleted."
        })
      }
    })
  }

}
