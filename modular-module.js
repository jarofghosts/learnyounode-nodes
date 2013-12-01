var fs = require('fs')

module.exports = filtered

function filtered(dir, filter, callback) {
  var filter_rex = new RegExp('\\.' + filter + '$')

  fs.readdir(dir, process_files)
  function process_files(err, list) {
    if (err) return callback(err)
    list = list.filter(function (filename) {
      return filter_rex.test(filename)
    })
    return callback(null, list)
  }
}
