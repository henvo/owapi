"use strict";

module.exports = function(app) {

  // Require User controller
  var users = require('../controllers/users'),
      passport = require('passport');

  // Route all Users related requests
  app.route('/users')
    .get(users.list)
    .post(users.create);

  app.route('/users/:userName')
    .get(users.read)
    .put(users.update)
    .delete(users.remove);

  app.route('/login')
    .get(users.renderSignin)
    .post(passport.authenticate('local', {
      successRedirect: '/',
      failureRedirect: '/login'
    }));

  app.route('/signup')
    .get(users.renderSignup)
    .post(users.signup);

    app.route('/logout')
      .get(users.renderSignout);

};
