var fs = require('fs')

var zlib = require('zlib')

fs.createReadStream('level.txt.gz')

.pipe(zlib.createGunzip())

.pipe(fs.createWriteStream('level.txt'))