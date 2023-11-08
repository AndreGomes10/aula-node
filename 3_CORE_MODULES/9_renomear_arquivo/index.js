const fs = require('fs')

const arqAntigo = "arquivo.txt"
const arqNovo = "novo.txt"

fs.rename(arqAntigo, arqNovo, function (err) {  // rename = renomear arquivo
  if (err) {
    console.log(err)
    return
  }
  console.log('Arquivo renomeado!')
})