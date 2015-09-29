var User = require('mongoose').model('User')

module.exports = {

  renderSignin: function(req, res, next) {
    if(!req.user) {
      res.render('signin')
    }
    else return res.redirect('/')
  },

  renderSignout: function(req, res, next) {
    req.logout()
    res.redirect('/')
  },

  renderSignup: function(req, res) {
    if(!req.user) {
      res.render('signup')
    }
    else {
      return res.redirect('/')
    }
  },

  signup: function(req, res) {
    if(!req.user) {
      var user = new User(req.body)
      user.provider = 'local'
      user.save(function(err) {
        if(err) {
          console.log(err)
          return res.redirect('/signup#save-error')
        }
        req.login(user, function(err) {
          if(err) return res.redirect('/signup#login-error')
          return res.redirect('/')
        })
      })
    } else {
      return res.redirect('/')
    }
  },

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
    User.findOne({ "name": req.params.userName }, function(err, doc) {
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
          "data": doc,
          "message": null
        })
      }
    })
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
    User.remove({ name: req.params.userName }, function(err) {
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
          "data": null,
          "message": "User succesfully deleted."
        })
      }
    })
  }

}
