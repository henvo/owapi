process.env.NODE_ENV = process.env.NODE_ENV || 'development'

/* Require packages */
var express = require('./config/express')
  , config = require('./config/config')
  , app = express()

app.listen(config.Port, function(err) {
  if(err) console.error(err)
  else console.log('Server running on port ' + config.Port)
});
