// const EventEmitter = require("events")
// class newEventEmitter extends EventEmitter{}
// const newEmitter = new newEventEmitter()

// newEmitter.on("message", ()=>{
//  console.log("Salom Dasturchi")
// })


// module.exports = newEmitter


const EventEmitter = require("events")
class NewEventEmitter extends EventEmitter{}
const newEmitter = new NewEventEmitter()
newEmitter.on("message",()=>{
    console.log("Salom dasturchi")
})

module.exports = newEmitter
