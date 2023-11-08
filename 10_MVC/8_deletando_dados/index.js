/* IMPORTAÇÃO */
const express = require('express')
const exphbs = require('express-handlebars')
const conn = require('./db/conn')
const Task = require('./models/Task')
const tasksRoutes = require('./routes/tasksRoutes')

/* FIM - IMPORTAÇÃO */

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
app.use('/tasks', tasksRoutes)
conn
  .sync()
  .then(() => {
    app.listen(3000)
  })
  .catch((err) => console.log(err))