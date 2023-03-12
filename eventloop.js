var events = require('events')
var eventEmitter = new events.EventEmitter()

var connectHandler = function connected() {
    console.log("data connects right away")
    eventEmitter.emit('data_received')
}

eventEmitter.on('connected', connectHandler)

eventEmitter.on('data_received', function() {
    console.log("Going through the process")
})

eventEmitter.emit('connected')
console.log("Data retreived")