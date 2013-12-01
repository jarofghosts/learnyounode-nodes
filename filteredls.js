var fs = require('fs'),
    extcheck = new RegExp('\\.' + process.argv[3] + '$')

fs.readdir(process.argv[2], function(err, list) {
  console.log(list.filter(function (filename) {
    return extcheck.test(filename)
  }).join('\n'))
})
