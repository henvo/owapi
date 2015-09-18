// include api model
var API = require('mongoose').model('API')

module.exports = function(router) {

  // Load the requested api and pass it to the request
  router.param('apiName', function(req, res, next) {
    API.findOne({ "name": req.params.apiName }, function(err, doc) {
      if(!err && doc) {
        req.api = doc
        next()
      }
      else if (!err && !doc) {
        res.status(404).json({
          "succes": false,
          "data": null,
          "message": "API not found."
        })
      }
      else {
        res.status(500).json({
          "success": false,
          "data": null,
          "message": err
        })
      }
    })
  })
}
