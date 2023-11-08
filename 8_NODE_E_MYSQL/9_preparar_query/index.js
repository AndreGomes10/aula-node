const express = require('express')
const exphbs = require('express-handlebars')
const pool = require('./db/conn')  // a conexão esta sendo feita em conn

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

// criar a rota pra inserir os livros
app.post('/books/insertbook', (req, res) => {
    const title = req.body.title
    const pageqty = req.body.pageqty

    // este é o estepe entre a query e a execução, a query esta preparada,
    // vai executada direto com os dados que vem do proprio usuario
    const sql = `INSERT INTO books (??, ??) VALUES (?, ?)`
    const data = ['title', 'pageqty', title, pageqty]

    pool.query(sql, data, function(err){
        if(err){
            console.log(err)
        }

        res.redirect('/books')  // mandar p home
    })
})

  // resgatar os livros
app.get('/books', (req, res) => {
    const sql = "SELECT * FROM books"

    pool.query(sql, function(err, data){
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

    const sql = `SELECT * FROM books WHERE ?? = ?`
    const data = ['id', id]

    pool.query(sql, data, function(err, data) {
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
  
    const sql = `SELECT * FROM books WHERE ?? = ?`
    const data = ['id', id]
  
    pool.query(sql, data, function (err, data) {
      if (err) {
        console.log(err)
      }
  
      const book = data[0]
  
      res.render('editbook', {book})
    })
})

app.post('/books/updatebook', (req, res) => {
    const id = req.body.id
    const title = req.body.title
    const pageqty = req.body.pageqty
  
    const sql = `UPDATE books SET ?? = ?, ?? = ? WHERE ?? = ?`
    const data = ['title', title, 'pageqty', pageqty, 'id', id]
  
    pool.query(sql, data, function (err) {
      if (err) {
        console.log(err)
      }
  
      res.redirect(`/books`)
    })
  })

  app.post('/books/remove/:id', (req, res) => {
    const id = req.params.id

    const sql = `DELETE FROM books WHERE ?? = ?`
    const data = ['id', id]

    pool.query(sql, data, function (err) {
      if (err) {
        console.log(err)
      }
  
      res.redirect(`/books`)
    })
  })

  app.listen(3000)  // porta que o servidor esta sendo executado

/*

  criação e instalação
    npm init -ynpm init -y
    npm install express express-handlebars nodemon mysql
  executar o projeto:
    npm start
*/