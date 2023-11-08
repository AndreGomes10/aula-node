const fs = require('fs')  // fs = file system, colocar o nome da variavel igual o nome do modulo

fs.readFile('arquivo.txt', 'utf8', (err, data) => {// readFile = para ler um arquivo
    if(err){
        console.log(err)
        return
    }

    console.log(data)
})