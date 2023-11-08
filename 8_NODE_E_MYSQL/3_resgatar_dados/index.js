const express = require('express')
const exphbs = require('express-handlebars')
const mysql = require('mysql')

const app = express()

app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/', function (req, res) {
    res.render('home')
  })

// criar a rota pra inserir os livros
  app.post('/books/insertbook', (req, res) => {
    const title = req.body.title
    const pageqty = req.body.pageqty

    const sql = `INSERT INTO books (title, pageqty) VALUES ('${title}', '${pageqty}')`

    conn.query(sql, function(err){
        if(err){
            console.log(err)
        }

        res.redirect('/books')  // mandar p home
    })
  })

  // resgatar os livros
  app.get('/books', (req, res) => {
    const sql = "SELECT * FROM books"

    conn.query(sql, function(err, data){
        if(err){
            console.log(err)
            return
        }

        const books = data
        console.log(books)

        res.render('books', {books})
    })
  })

// conexão com o mysql
const conn = mysql.createConnection({
    host: "localhost",
    user:"root",
    password:'mysql', // senha do root no seu computador
    database: 'nodemysql2',
})

conn.connect(function(err){
    if(err){
        console.log(err)
    }

    console.log('Conectou ao Mysql!')

    app.listen(3000)
})