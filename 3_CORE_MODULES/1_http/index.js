const http = require("http")

const port = 3000

// req = requesition, res = response
const server = http.createServer((req, res) => {
    res.write('Oi HTTP')  // vai escrever uma resposta pro usuario
    res.end()  // finalizar, tem que finalizar a resposta, senão vai ficar carregando até fechar a janela
})

server.listen(port, () => {  /* pra saber se esta tudo funcionando */
    console.log(`Servidor rodando na porta ${port}`);
})