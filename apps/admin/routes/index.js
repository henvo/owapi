module.exports = function(app) {

  // Require API controller
  var index = require('../controllers/index')
  // Route all API related requests
  app.route('/')
    .get(index.render)

}
