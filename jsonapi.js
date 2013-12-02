var http = require('http'),
    url = require('url')

http.createServer(function(req, res) {
  var route = url.parse(req.url, true)
  if (req.method !== 'GET' || !(route.pathname === '/api/parsetime' ||
      route.pathname === '/api/unixtime')) {
    res.writeHead(404)
    return res.end('Bad.')
  }
  res.writeHead(200, {'Content-Type': 'application/json'})
  var date = new Date(route.query.iso)

  if (route.pathname === '/api/parsetime') {
    var parsed_date = {
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds()
    }
    return res.end(JSON.stringify(parsed_date))
  }
  if (route.pathname === '/api/unixtime') {
    return res.end(JSON.stringify({unixtime: +date}))
  }
}).listen(8000)
