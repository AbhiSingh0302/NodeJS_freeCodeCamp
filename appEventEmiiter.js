const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('response',(name,age) => {
    console.log(`data received of ${name} having age as ${age}`);
})

customEmitter.emit('response','john',25);//Order matters in .emit and .on
