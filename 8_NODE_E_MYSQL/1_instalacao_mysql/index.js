const express = require('express')
const exphbs = require('express-handlebars')
const mysql = require('mysql')

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/', function (req, res) {
    res.render('home')
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

/*
    criação e instalação
    npm init -ynpm init -y
    npm install express express-handlebars nodemon mysql

*/