var mongoose = require('mongoose')

// api schema
var userSchema = mongoose.Schema({
  "name": { type: String },
  "email": { type: String },
  "password": {type: String }
})

mongoose.model('User', userSchema)
