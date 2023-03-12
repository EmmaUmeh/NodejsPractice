// const fs = require ('fs');
// const data = ''

// fs.readFile('input.txt', function(err, data){
// if(err){
//     return console.error(err)
// }
// console.log(data.toString())
// })
// console.log("Program Executed")


const fs = require('fs');

console.log('Syncing a file')
var data = fs.readFileSync('input.txt')
  
    console.log(data.toString())

console.log("Program Synced")