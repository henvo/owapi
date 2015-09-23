var mongoose = require('mongoose')

// api schema
var userSchema = mongoose.Schema({
  "name": {
    type: String,
    required: true,
    index: true,
    unique: true
  },
  "email": {
    type: String,
    unique: true,
    required: true
  },
  "password": {
    type: String,
    required: true
  }
})

userSchema.methods.authenticate = function(password) {
  return this.password === password
}

mongoose.model('User', userSchema)
