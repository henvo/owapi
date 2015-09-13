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
      else if (!err && !doc) res.send('API not found.')
      else res.send(err)
    })
  })
}
