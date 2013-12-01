var fs = require('fs'),
    file = fs.createReadStream(process.argv[2]),
    newlines = 0

file.on('data', function(buf) {
  for (var i = 0, l = buf.length; i < l; ++i) {
    if (buf[i] === 10) newlines++
  }
})
file.on('end', function() {
  console.log(newlines)
})
