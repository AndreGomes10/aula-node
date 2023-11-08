const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

// setup pra instalar o handlebars no projeto
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

// renderizar a view
app.get('/', (req, res) => {
    res.render('home', { layout: false})  // mandando um render para home, ele vai renderizar a view home
})

app.listen(3000, () => {  // porta 3000
    console.log('App funcionando!')
})


/*
    instalar npm init -y
    npm install nodemon express express-handlebars 
*/