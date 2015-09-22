module.exports = function(app) {

  // Require controller
  var collection = require('../controllers/collections')

  // Route collection requests
  app.route('/apis/:apiName')
    .post(collection.create)
  app.route('/apis/:apiName/:resourceName')
    .put(collection.update)
    .delete(collection.remove)

}
