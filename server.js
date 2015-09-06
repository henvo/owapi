process.env.NODE_ENV = process.env.NODE_ENV || 'development'

/* Require packages */
var express = require('./config/express')
  , mongoose = require('./config/mongoose')
  , config = require('./config/config')
  , app = express()

var db = mongoose()

app.listen(config.Port, function(err) {
  if(err) console.error(err)
  else console.log('Server running on port ' + config.Port)
});
