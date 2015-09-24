module.exports = function(router) {

  // Check if user is logged in
  router.use('/apis/:apiName/:resourceName', function(req, res, next) {
    if(req.api.status === "inactive") {
      res.status(404).json({
        "success": false,
        "data": null,
        "message": "API is currently inactive."
      })
    } else {
      next()
    }
  })
}
