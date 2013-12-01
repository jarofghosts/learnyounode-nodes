var net = require('net')

net.createServer(function(sock) {
  var date = new Date,
      ymd = [date.getFullYear(),
          pad(date.getMonth() + 1),
          pad(date.getDate())].join('-'),
      hhmm = [pad(date.getHours()), pad(date.getMinutes())].join(':'),
      data = [ymd, hhmm].join(' ')

  sock.end(data)
}).listen(8000)

function pad(str) {
  return ('0' + str).slice(-2)
}
