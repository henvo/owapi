"use strict";

module.exports = function(app) {

  // Require resources router
  var resources = require('../controllers/resources');

  // Route all resources requests
  app.route('/apis/:apiName/:resourceName')
    .get(resources.list)
    .post(resources.create);

  app.route('/apis/:apiName/:resourceName/:resourceId')
    .get(resources.read)
    .put(resources.update)
    .delete(resources.remove);
};
