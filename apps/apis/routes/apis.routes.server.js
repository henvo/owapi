module.exports = function(app) {

  // Require API controller
  var apis = require('../controllers/apis.controllers.server')

  // Route all API related requests
  app.route('/')
    .get(apis.list)
    .post(apis.create)

  app.route('/:apiName')
    .get(apis.read)
    .put(apis.update)
    .delete(apis.remove)

}
