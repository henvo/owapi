var express = require('express')
  , router = express.Router()

// Require routes
require('./routes/index')(router)

module.exports = router;
