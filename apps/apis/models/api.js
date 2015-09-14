var mongoose = require('mongoose')

// api schema
var apiSchema = mongoose.Schema({
  "name": { type: String, index: true, required: true, unique: true },
  "status": { type: String, required: true },
  "info": String,
  "resources": {}
})

mongoose.model('API', apiSchema)
