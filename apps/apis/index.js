var express = require('express')
  , router = express.Router()

  /* Require routers */
require('./routers/apis.routers.server')(router)
require('./routers/resources.routers.server')(router)
require('./routers/collections.routers.server')(router)

module.exports = router;
