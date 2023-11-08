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

app.get('/books/:id', (req, res) => {
    const id = req.params.id
    const sql = `SELECT * FROM books WHERE id = ${id}`

    conn.query(sql, function(err, data) {
        if(err){
            console.log(err)
            return
        }

        const book = data[0]  // [0], porque o where ele vai trazer varios (array, lista), então 0 é o primeiro, ele vai trazer só 1

        res.render('book', {book})
    })
})

  // resgatar os dados e enviar pra uma view
app.get('/books/edit/:id', (req, res) => {
    const id = req.params.id
  
    const sql = `SELECT * FROM books WHERE id = ${id}`
  
    conn.query(sql, function (err, data) {
      if (err) {
        console.log(err)
      }
  
      const book = data[0]
  
      res.render('editbook', {book})
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