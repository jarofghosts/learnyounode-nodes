var filter = require('./modular-module')

filter(process.argv[2], process.argv[3], function (err, list) {
  if (err) return console.log('there wasa error')
  console.log(list.join('\n'))
})
