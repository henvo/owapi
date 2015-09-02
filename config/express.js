var express = require('express')

module.exports = function() {
  var app = express()

  /* Require apps */
  var apis = require('../apps/apis/')(app)
    , admin = require('../apps/admin/')(app)

  return app
}
