var fs = require ('fs');
var zlib = require ('zlib')
fs.createReadStream('export.txt.gz')
.pipe(zlib.createGunzip())
.pipe(fs.createWriteStream('export.txt') )
console.log('file Decompressed')