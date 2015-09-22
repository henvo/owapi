var User = require('mongoose').model('User')

module.exports = {

  create: function(req, res) {
    var newUser = new User(req.body)
    newUser.save(function(err, doc) {
      if(err) {
        res.status(400).json({
          "success": false,
          "data": null,
          "message": err
        })
      } else {
        res.json({
          "sucess": true,
          "data": doc,
          "message": null
        })
      }
    })
  },
  read: function(req, res) {

  },
  update: function(req, res) {

  },
  list: function(req, res) {
    User.find({}, function(err, docs) {
      if(err) {
        res.status(500).json({
          "success": false,
          "data": null,
          "message": err
        })
      }
      else {
        res.json({
          "sucess": true,
          "data": docs,
          "message": null
        })
      }
    })
  },
  remove: function(req, res) {

  }

}
