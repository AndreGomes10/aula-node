const path = require('path')

const customPath = '/relatorios/matheus/relatorio1.pdf'

console.log(path.dirname(customPath))  // pra saber nome do diretorio
console.log(path.basename(customPath))  // pra saber o caminho
console.log(path.extname(customPath))  // pra saber o nome da extensão do arquivo