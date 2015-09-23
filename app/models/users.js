var mongoose = require('mongoose')

// api schema
var userSchema = mongoose.Schema({
  "name": { type: String },
  "email": { type: String },
  "password": { type: String }
})

userSchema.methods.authenticate = function(password) {
  return this.password === password
}

mongoose.model('User', userSchema)
