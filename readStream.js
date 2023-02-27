var fs = require('fs')
var data = 'Simple techniques'
var writeStream = fs.createWriteStream('nin.txt')
writeStream.write(data, 'utf-8')
    writeStream.end()
writeStream.on('finish', function() {
    console.log('Written Complete')
})
writeStream.on('error', function(err) {
    console.error(err.stack)
})
console.log('program Ended')