module.exports = function(app) {

  // Require User controller
  var users = require('../controllers/users')

  // Route all Users related requests
  app.route('/users')
    .get(users.list)
    .post(users.create)

  app.route('/users/:userName')
    .get(users.read)
    .put(users.update)
    .delete(users.remove)

}
