const minimist = require('minimist')

// resgatar os argumentos
const args = minimist(process.argv.slice(2))
console.log(args)

// com o modulo do npm não vamos precisar dar o split, o array ja vem pronto e muito etc
// acessar argumentos com array
const nome = args['nome']
const profissao = args['profissao']

console.log(nome)

console.log(`O nome dele é ${nome} e a profissão dele é ${profissao}`)

// npm install inquirer chalk
// executar linha no terminal: node index.js --nome=Andre --profissao=Analista