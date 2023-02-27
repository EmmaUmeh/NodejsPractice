// Compressed file
var fs = require ('fs');
var zlib = require ('zlib');
fs.createReadStream('export.txt')
.pipe(zlib.createGzip())
.pipe(fs.createWriteStream('export.txt.gz'))
console.log("File Compressed")
