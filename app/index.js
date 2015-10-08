var express = require('express')
  , router = express.Router()

/* Require models */
require('./models/api')
require('./models/user')

/* Require middleware */
require('./middleware/api-name')(router)
require('./middleware/api-auth')(router)
require('./middleware/api-status')(router)
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
    res.render('index', {
      user: req.user
    })
  }
})

module.exports = router
