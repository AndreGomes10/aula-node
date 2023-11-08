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


// Inserir
// colocar asinc e await no User.create
app.get('/users/create', (req, res) => {
  res.render('adduser')
})

app.post('/users/create', async (req, res) => {  // colocar asinc e await no User.create
  const name = req.body.name
  const occupation = req.body.occupation
  let newsletter = req.body.newsletter

  if (newsletter === 'on') {
    newsletter = true
  } else {
    newsletter = false
  }

  await User.create({ name, occupation, newsletter })

  res.redirect('/')

})
// Fim - Inserir

 // exibir os dados na home
app.get('/', async (req, res) => {

  // raw: true = para os dados vim pronto
  const users = await User.findAll({raw: true})  // extrair os dados na variavel user

  console.log(users)

  res.render('home', {users: users})  // aqui vai ter a primeira rota
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