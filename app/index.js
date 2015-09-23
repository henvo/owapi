var express = require('express')
  , router = express.Router()

/* Require models */
require('./models/api')
require('./models/users')

/* Require middleware */
require('./middleware/api')(router)
require('./middleware/resource')(router)

/* Require routers */
require('./routes/apis')(router)
require('./routes/resources')(router)
require('./routes/collections')(router)
require('./routes/users')(router)

/* Serve index page */
router.get('/', function(req, res) {
  if(!req.user) {
    res.redirect('/login')
  }
  else {
    res.render('index')
  }
})

module.exports = router
