var fs = require('fs'),
    data = fs.readFileSync(process.argv[2], 'utf8')

console.log(data.match(/\n/g).length)
