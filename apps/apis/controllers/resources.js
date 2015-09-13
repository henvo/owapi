module.exports = {

  create: function(req, res) {
    var newResource = new req.Resource(req.body)
    newResource.save(function(err, data) {
      if(!err) res.send(data)
    })
  },
  read: function(req, res) {
    req.Resource.find({ "_id": req.params.resourceId }, function(err, doc) {
      if(!err) res.send(doc)
    })
  },
  update: function(req, res) {
    res.send('Update Resource')
  },
  list: function(req, res) {
    req.Resource.find({}, function(err, docs) {
      if(!err) res.send(docs)
    })
  },
  remove: function(req, res) {
    req.Resource.findByIdAndRemove({ "_id": req.params.resourceId }, function(err) {
      if(!err) res.send('Successfully deleted resource')
    })
  }

}
