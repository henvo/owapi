module.exports = function(app) {

  /* Require routers */
  require('./routers/apis.routers.server')(app)
  require('./routers/resources.routers.server')(app)
  require('./routers/collections.routers.server')(app)

}
