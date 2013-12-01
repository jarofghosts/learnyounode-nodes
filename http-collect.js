var http = require('http')

http.get(process.argv[2], function (res) {
  var result = []
  res.setEncoding('utf8')
  res.on('data', function(data) {
    result.push(data)
  })
  res.on('end', function() {
    result = result.join('')
    console.log(result.length)
    console.log(result)
  })
})
