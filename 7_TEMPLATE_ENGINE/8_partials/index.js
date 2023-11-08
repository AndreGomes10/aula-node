const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

// partials
const hbs = exphbs.create({
    partialsDir: ['views/partials'],
})

// setup pra instalar o handlebars no projeto
app.engine('handlebars', hbs.engine)
//app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/dashboard', (req, res) => {
    const items = ["Item a", "Item b", "Item c"]
    res.render('dashboard', {items})  // enviando o items para o front-end
})

app.get('/post', (req, res) => {
    const post = {
        title: 'Aprender Node.js',
        category: 'JavaScript',
        body: 'Este artigo vai te ajudar a aprender Node.js',
        comments: 4,
    }
    res.render('blogpost', {post})
})

app.get('/blog', (req, res) => {
    const posts = [
      {
        title: "Aprender JavaScript",
        category: "JavaScript",
        body: "JavaScript é muito utilizado na programação hoje em dia",
        comments: 4,
      },
      {
        title: "Aprender PHP",
        category: "PHP",
        body: "Muito legal",
        comments: 12,
      },
      {
        title: "Aprender Python",
        category: "Paython",
        body: "Programação",
        comments: 5,
      },
    ];
  
    res.render('blog', { posts });
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