const path = require('path')

// path absoluto
console.log(path.resolve('teste.txt'))  // ele vai dar o caminho exato desde a unidade do meu hd até o arquivo que quero saber

// formar path
const midFolder = 'relatorios'  // uma pasta
const fileName = 'matheus.txt'  // nome de um arquivo

const finalPath = path.join("/", 'arquivos', midFolder, fileName)  // vai ser a junção de tudo

console.log(finalPath)