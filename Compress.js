var fs = require('fs')
var zlib = require('zlib')

var readStream = fs.createReadStream('level.txt')

readStream.pipe(zlib.createGzip())

readStream.pipe(fs.createWriteStream('level.txt.gz'))