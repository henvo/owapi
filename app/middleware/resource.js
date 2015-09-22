// include api model
var mongoose = require('mongoose')
  , generator = require('mongoose-gen')

module.exports = function(router) {

  // Load the requested resource and pass its model to the request
  router.param('resourceName', function(req, res, next) {
    // Create model name from api and resource name
    req.modelName = req.params.apiName + '.' + req.params.resourceName
    // Check if model is already compiled
    if(req.api) {
      if(req.api.resources[req.params.resourceName]) {
        if(!mongoose.connection.models[req.modelName]) {
          var resourceSchema = new mongoose.Schema(
            generator.convert(req.api.resources[req.params.resourceName])
          )
          // Compile model
          mongoose.model(req.modelName, resourceSchema)
          req.Resource = require('mongoose').model(req.modelName)
          next()
        } else {
          req.Resource = require('mongoose').model(req.modelName)
          next()
        }
      } else {
        res.status(401).json({
          "success": false,
          "data": null,
          "message": "Resource is not a part of the API schema"
        })
      }
    } else {
      res.status(404).json({
        "success": false,
        "data": null,
        "message": "API not found."
      })
    }
  })
}
