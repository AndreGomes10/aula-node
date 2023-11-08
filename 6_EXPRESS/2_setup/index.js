const express = require("express")
const app = express()  // estamos inicializando o express
const port = 3000  // variavel ambiente

// req = requisição(é o que recebemos), quando receber dados do usuario por um formulario ou alguma outra coisa
// res  = é o que enviamos, a resposta para o usuario
app.get('/', (req, res) => {  // representa o http, o usuario visualizar a pagina
    res.send('Olá Mundo!')
})

//tem que dar o listen na porta
app.listen(port, () =>{  // quando tiver uma requisição no endereço localhost:3000 ele vai executar
    console.log(`App rodando na porta ${port}`)
})



/*
    npm init -y
    npm install express

    pra rodar o programa: node index.js

    instalar o express como dependencia do projeto
*/