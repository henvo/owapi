module.exports = function(router) {

  // Check if user is logged in
  router.use('/apis', function(req, res, next) {
    if(!req.user) {
      res.status(401).json({
        "success": false,
        "data": null,
        "message": "You are not logged in."
      })
    } else {
      next()
    }
  })

  // Check if user is admin of API
  router.use('/apis/:apiName', function(req, res, next) {
    if(!req.user._id.equals(req.api.admin)) {
      res.status(401).json({
        "success": false,
        "data": null,
        "message": "You are NOT the father."
      })
    } else {
      next()
    }
  })

}
