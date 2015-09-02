module.exports = {

  create: function(req, res) {
    res.send('Create a new Resource')
  },
  read: function(req, res) {
    res.send('Get resource information')
  },
  update: function(req, res) {
    res.send('Update Resource')
  },
  list: function(req, res) {
    res.send('List all Resources')
  },
  remove: function(req, res) {
    res.send('Delete Resource')
  }

}
