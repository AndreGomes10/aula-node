const express = require('express')
const exphbs = require('express-handlebars')
const conn = require('./db/conn')  // a conexão esta sendo feita em conn

const User = require('./models/User')

const app = express()

//////// Configurar ////////
app.use(  // configurar o express pra poder pegar o body
  express.urlencoded({
    extended: true,
  }),
)
app.use(express.json())  // pra poder pegar o body em json
//////// Configurar ////////


app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.static('public'))  // deixar uma ponte para os arquivos estaticos em public

app.get('/', (req, res) => {
  res.render('home')  // aqui vai ter a primeira rota
})

conn
  .sync()
  .then(() => {
    app.listen(3000)  // porta que o servidor esta sendo executado
  })
  .catch ((err) => console.log(err))

/*

  criação e instalação
    npm init -ynpm init -y
    npm install express express-handlebars nodemon
    npm install sequelize
    npm install mysql2
  executar o projeto:
    npm start
*/