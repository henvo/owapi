module.exports = {
  render: function(req, res) {
    res.sendFile('index.html', { root: __dirname + '/../../../public/docs/views/'})
  }
}
