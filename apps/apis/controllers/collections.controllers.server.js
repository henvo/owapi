module.exports = {

  create: function(req, res) {
    res.send('Create a new collection')
  },
  read: function(req, res) {
    res.send('Get collection information')
  },
  update: function(req, res) {
    res.send('Update Collection')
  },
  list: function(req, res) {
    res.send('List all Collections')
  },
  remove: function(req, res) {
    res.send('Delete Collection')
  }

}
