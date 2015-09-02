module.exports = {

  create: function(req, res) {
    res.send('Create a new API')
  },
  read: function(req, res) {
    res.send('Get API information')
  },
  update: function(req, res) {
    res.send('Update API')
  },
  list: function(req, res) {
    res.send('List all APIs')
  },
  remove: function(req, res) {
    res.send('Delete API')
  }

}
