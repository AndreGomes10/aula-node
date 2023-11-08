const express = require("express")
const app = express()  // estamos inicializando o express
const port = 3000  // variavel ambiente

const path = require("path")

const basePath = path.join(__dirname, 'templates')  // acessar a pasta templates, vamos conseguir dar um sendFile

const checkAuth = function(req, res, next){  // middleware
    req.authStatus = true  // aqui ja estamos pegando a resposta direto

    if(req.authStatus){
        console.log('Está logado, pode continuar')
        next()  // se não tiver o next ele vai ficar carregando a pagina em um loop infinito, 
                // então tem que colocar o next p ir pra proxima etapa
    } else {
        console.log('Não está logado, faça o login para continuar')
        next()
    }
}
app.use(checkAuth)

// req = requisição(é o que recebemos), quando receber dados do usuario por um formulario ou alguma outra coisa
// res  = é o que enviamos, a resposta para o usuario
app.get('/', (req, res) => {  // representa o http, o usuario visualizar a pagina
    //res.send('Olá Mundo!')
    res.sendFile(`${basePath}/index.html`)  // ele envia a resposta de um arquivo, vamos unir a variavel de basePath com a index.html
})

//tem que dar o listen na porta
app.listen(port, () =>{  // quando tiver uma requisição no endereço localhost:3000 ele vai executar
    console.log(`App rodando na porta ${port}`)
})



/*
    npm init -y
    npm install express

    instalar nodemon de maneira correta, pra instalar como dependencia de desenvolvimento:
    npm install --save-dev nodemon

    no arquivo package.json foi colocado o codigo em scripts "start": "nodemon ./index.js localhost 3000"
    com o nodemon confugurado vamos rodar o projeto com: npm start

    pra rodar o programa: node index.js
    instalar o express como dependencia do projeto
*/