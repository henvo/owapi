var config = require('./config')
  , mongoose = require('mongoose')

module.exports = function(){
  // Connect to database
  var db = mongoose.connect(config.db)

}
