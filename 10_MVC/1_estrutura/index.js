const express = require('express')
const exphbs = require('express-handlebars')
const conn = require('./db/conn')  // a conexão esta sendo feita em conn

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(  // configurar o express pra poder pegar o body
  express.urlencoded({
    extended: true,
  }),
)

app.use(express.json())  // pra poder pegar o body em json

app.use(express.static('public'))  // deixar uma ponte para os arquivos estaticos em public

app.listen(3000)