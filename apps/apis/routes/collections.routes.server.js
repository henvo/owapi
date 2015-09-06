module.exports = function(app) {

  // Require controller
  var collection = require('../controllers/collections.controllers.server')

  // Route collection requests
  app.route('/:apiName')
    .post(collection.create)
  app.route('/:apiName/:resourceName')
    .put(collection.update)
    .delete(collection.remove)

}
