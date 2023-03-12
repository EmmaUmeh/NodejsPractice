var fs = require('fs')
var buf = new Buffer(1023);

fs.open('level.txt', 'r+', function(err, fd) {
console.error(err)


fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
if(err) {
    console.error(err)
}
console.log(bytes + 'bytes read' )


if(bytes > 0) {
    console.log(buf.slice(0, bytes).toString())
}

})
})
