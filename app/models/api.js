var mongoose = require('mongoose')

// api schema
var apiSchema = mongoose.Schema({
  "name": {
    type: String,
    index: true,
    required: true,
    unique: true,
    match: /^(?!users|apis).*$/
  },
  "status": {
    type: String,
    required: true,
    enum: ['active', 'inactive']
  },
  "admin": {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  "info": {
    type: String,
    required: true
  },
  "resources": {}
})

mongoose.model('API', apiSchema)
