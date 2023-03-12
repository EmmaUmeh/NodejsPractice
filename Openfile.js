var fs = require('fs')

fs.open('input.txt', 'r', function(err) {
if(err) {
    return console.error(err)
}
})
console.log('Program Ended')