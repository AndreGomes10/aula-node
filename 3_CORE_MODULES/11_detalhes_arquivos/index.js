const fs = require('fs')

/* fazer o teste pra arquivo e pasta */
//fs.stat('pasta', (err, stats) => {
fs.stat('novoarquivo.txt', (err, stats) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(stats.isFile())  // perguntar se é um arquivo
  console.log(stats.isDirectory())  // pra saber se é um diretorio
  console.log(stats.isSymbolicLink())  // pra saber se é um link simbolico
  console.log(stats.ctime)  // pra saber a data de criação
  console.log(stats.size)  // pra saber o tamanho do arquivo
})