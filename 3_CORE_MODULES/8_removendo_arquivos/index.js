const fs = require('fs')

fs.unlink('arquivo.txt', function (err) {  // unlink = para remover arquivo
  if (err) {
    console.log(err)
    return
  }
  console.log('Arquivo removido!')
})