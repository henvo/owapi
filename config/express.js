var express = require('express')

module.exports = function() {
  var app = express()

  /* Require apps */
  app.use('/apis', require('../apps/apis/'))
  app.use('/admin', require('../apps/admin'))

  return app
}
