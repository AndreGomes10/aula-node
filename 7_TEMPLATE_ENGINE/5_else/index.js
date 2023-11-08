const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

// setup pra instalar o handlebars no projeto
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/dashboard', (req, res) => {
    res.render('dashboard')
})

// renderizar a view
app.get('/', (req, res) => {

    const user = {
        name: 'Matheus',
        surname: 'Battisti',
        age: 30,
      }

      const palavra = 'Muito'

      const auth = true  // se o usuario esta logado ou não
      const approved = true


      res.render('home', {user : user, palavra, auth, approved})  // mandando um render para home, ele vai renderizar a view home
                                                  // user : user = chave e um valor, quando mandar o user o front-end vai 
                                                  // ter acesso ao user no front-end.
                                                  // é uma comunicação do back-end com o front-end
})

app.listen(3000, () => {  // porta 3000
    console.log('App funcionando!')
})


/*
    instalar npm init -y
    npm install nodemon express express-handlebars 
*/