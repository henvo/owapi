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

  /* Install apps here */
  app.use('/apis', require('../apps/apis/'))
  app.use('/admin', require('../apps/admin/'))
  
  /* Index page */
  app.get('/', function(req, res) {
    res.sendFile('index.html', { root: __dirname + '/../public/'})
  })

  /* Require static files from public folder */
  app.use('/static', express.static(__dirname + '/../public'))

  /* Handle 404 pages */
  app.get('*', function(req, res) {
    res.sendFile('404.html', { root: __dirname + '/../public/'})
  })

  return app
}
