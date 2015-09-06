var express = require('express')
  , router = express.Router()

/* Require models */
require('./models/api.models.server')

/* Require middleware */
require('./middleware/api.middleware.server')(router)
require('./middleware/resource.middleware.server')(router)

/* Require routers */
require('./routes/apis.routes.server')(router)
require('./routes/resources.routes.server')(router)
require('./routes/collections.routes.server')(router)

module.exports = router
