var express = require('express')
  , morgan = require('morgan')
  , compress = require('compression')
  , bodyParser = require('body-parser')
  , methodOverride = require('method-override')

module.exports = function() {
  var app = express()

  if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
  } else if(process.env.NODE_ENV === 'production') {
    app.use(compress())
  }

  app.use(bodyParser.urlencoded({
     extended: true
  }))
  app.use(bodyParser.json())
  app.use(methodOverride())

  /* Require apps */
  app.use('/apis', require('../apps/apis/'))
  app.use('/admin', require('../apps/admin/'))

  /* Require static files from public folder */
  app.use('/static', express.static(__dirname + '/../public'))

  return app
}
