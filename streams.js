// write a streams

var fs = require('fs')
var data = 'Simple streams added'

var writeStream = fs.createWriteStream('input.txt')

writeStream.write(data, 'utf-8')
writeStream.end()

writeStream.on('finish', function(){
    console.log('Data written')
})
writeStream.on('error', function(err) {
    if(err) {
        return console.log(err)
    }
})

