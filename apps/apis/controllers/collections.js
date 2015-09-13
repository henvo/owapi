var mongoose = require('mongoose')

module.exports = {

  create: function(req, res) {
    if(!req.api.resources) req.api.resources = {}
    req.api.resources[req.body.name] = req.body.schema
    req.api.markModified('resources')
    req.api.save(function (err) {
      if(err) {
        res.send(err)
      }
      else {
        res.send(req.api)
      }
    })
  },
  read: function(req, res) {
    res.send(req.api.resources[req.params.resourceName])
  },
  update: function(req, res) {
    res.send('Update Collection is not possible')
  },
  list: function(req, res) {
    res.send(req.api.resources)
  },
  remove: function(req, res) {
    delete req.api.resources[req.params.resourceName]
    req.api.markModified('resources')
    req.api.save(function (err) {
      if(err) {
        res.send(err)
      }
      else {
        mongoose.connection.collections[req.modelName].drop( function(err) {
          if(err) res.send(err)
          else res.send(req.api)
        })
      }
    })
  }

}
