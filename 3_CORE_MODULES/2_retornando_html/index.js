const http = require("http")

const port = 3000

// req = requesition, res = response
const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Contenty-Type', 'text/html')
    res.end('<h1>Olá, este é o meu primeiro server!</h1><p>Testando atualização</p>')
})

server.listen(port, () => {  /* pra saber se esta tudo funcionando */
    console.log(`Servidor rodando na porta ${port}`);
})