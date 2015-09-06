var API = require('mongoose').model('API')

module.exports = {

  create: function(req, res) {
    var newAPI = new API(req.body)
    newAPI.save(function(err, doc) {
      res.send(doc)
    })
  },
  read: function(req, res) {
    res.send(req.api)
  },
  update: function(req, res) {
    res.send('Update API')
  },
  list: function(req, res) {
    API.find({}, function(err, docs) {
      res.send(docs)
    })
  },
  remove: function(req, res) {
    API.findOneAndRemove({
      "name": req.params.apiName
    }, function(err) {
      if(!err) res.send('Success!')
    })
  }

}
