var http = require('http'),
    results = [],
    completed = 0

for (var i = 0; i < 3; ++i) {
  do_get(process.argv[2 + i], i)
}

function do_get(url, idx) {
  var result = []

  http.get(url, function(res) {
    res.setEncoding('utf8')
    res.on('data', function(data) {
      result.push(data)
    })
    res.on('end', function() {
      results[idx] = result.join('')
      completed++
      if (completed === 3) finish()
    })
  })
}

function finish() {
  console.log(results.join('\n'))
}
