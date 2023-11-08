const express = require('express')
const exphbs = require('express-handlebars')

const app = express()  // iniciar express

const conn = require('./db/conn')

const productsRoutes = require('./routes/productsRoutes')

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

// head body
app.use(  // configurar o express pra poder pegar o body
  express.urlencoded({
    extended: true,
  }),
)

app.use(express.json())

app.use(express.static('public'))

app.use('/products', productsRoutes)

app.listen(3000)