const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

// setup pra instalar o handlebars no projeto
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

// renderizar a view
app.get('/', (req, res) => {

    const user = {
        name: 'Matheus',
        surname: 'Battisti',
        age: 30,
      }

      const palavra = 'Muito'   
      res.render('home', {user : user, palavra})  // mandando um render para home, ele vai renderizar a view home
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