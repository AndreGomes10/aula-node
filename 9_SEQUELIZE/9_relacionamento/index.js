const express = require('express')
const exphbs = require('express-handlebars')
const conn = require('./db/conn')  // a conexão esta sendo feita em conn

const User = require('./models/User')
const Address = require('./models/Address')

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


// buscar um dado (select)
app.get('/users/:id', async (req, res) => {
  const id = req.params.id

  // raw: true = para os dados vim pronto
  const user = await User.findOne({raw: true, where: {id: id}})

  res.render('userview', {user})
})
// Fim - buscar um dado (select)

// Remover (delete)
app.post('/users/delete/:id', async (req, res) => {
  const id = req.params.id

  await User.destroy({where: {id: id}})

  res.redirect('/')
})
// Fim - Remover (delete)

///// Editar /////
// Carregar dados no formulario
app.get('/users/edit/:id', async (req, res) => {
  const id = req.params.id

  const user = await User.findOne({raw: true, where: {id: id}})

  res.render('useredit', { user })
})
// Fim - Carregar dados no formulario

app.post('/users/update', async (req, res) => {
  const id = req.body.id
  const name = req.body.name
  const occupation = req.body.occupation
  let newsletter = req.body.newsletter

  if(newsletter === 'on'){
    newsletter = true
  } else{
    newsletter = false
  }

  const userData = {
    id,
    name,
    occupation,
    newsletter,
  }

  await User.update(userData, {where: {id: id}})

  res.redirect('/')
})

// Fim - Editar

 // exibir os dados na home
app.get('/', async (req, res) => {
  // raw: true = para os dados vim pronto
  const users = await User.findAll({raw: true})  // extrair os dados na variavel user

  console.log(users)

  res.render('home', {users: users})  // aqui vai ter a primeira rota
})

conn
  //.sync()
  .sync({force: true})  // pra resetar o banco, pra quando for criar os relacionamentos e etc...
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