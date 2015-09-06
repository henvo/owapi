module.exports = function(app) {

  // Require resources router
  var resources = require('../controllers/resources.controllers.server')

  // Route all resources requests
  app.route('/:apiName/:resourceName')
    .get(resources.list)
    .post(resources.create)

  app.route('/:apiName/:resourceName/:resourceId')
    .get(resources.read)
    .put(resources.update)
    .delete(resources.remove)

}
