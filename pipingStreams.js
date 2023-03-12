var fs  = require('fs')

var readStream = fs.createReadStream('level.txt')

var writeStream =fs.createWriteStream('level.txt')

readStream.pipe(writeStream)

console.log(readStream.toString())