var fs = require('fs')
var writerStream = fs.createWriteStream('input.txt')
var readStream = fs.createReadStream('input.txt')
readStream.pipe(writerStream)
