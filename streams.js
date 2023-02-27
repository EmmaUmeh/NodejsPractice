var fs = require('fs')
var data = ''
var readStream = fs.createReadStream('input.txt')
readStream.setEncoding('utf8')
readStream.on('data', function(chunck) {
data +=  chunck;
})
readStream.on('end', function() {
    console.log(data)
})

readStream.on('error', function(err) {
    console.error(err.stack)
})
console.log('Program Ended')
