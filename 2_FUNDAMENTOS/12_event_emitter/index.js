const EventEmitter = require('events')
const eventEmitter = new EventEmitter()

eventEmitter.on('start', () => {  // criando um evento chamado start, pode ser qualquer evento tipo: enter ou outro evento
  console.log('Durante')
})

console.log('Antes')

eventEmitter.emit('start')

console.log('Depois')