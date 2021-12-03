const EventEmitter = require('events');

const customeEmitter = new EventEmitter();

//EventEmitter.on() = listen for an event;
//EventEmitter.emit() - emit an event;
//servers in http modules are event emmitters.


customeEmitter.on('response', (name, id) => {
    console.log(`data received: User ${name} with id: ${id}`)
})

customeEmitter.on('response', () => {
    console.log(`data received`)
})

customeEmitter.emit('response', 'Bashiru', 11);