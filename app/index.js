var express = require('express')
  , router = express.Router()

/* Require models */
require('./models/api')

/* Require middleware */
require('./middleware/api')(router)
require('./middleware/resource')(router)

/* Require routers */
require('./routes/apis')(router)
require('./routes/resources')(router)
require('./routes/collections')(router)

/* Serve index page */
router.get('/', function(req, res) {
  res.render('index')
})

module.exports = router
