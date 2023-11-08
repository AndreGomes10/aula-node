const fs = require('fs')

if (!fs.existsSync('./minhapasta')) {  // verificar se o diretorio existe
  console.log('Não existe')
  
  fs.mkdirSync('minhapasta')  // criar a pasta
}

if (fs.existsSync('minhapasta')) {
  console.log('Existe')
}