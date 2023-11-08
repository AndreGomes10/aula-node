const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

app.engine('handlebars', exphbs.engine())

app.set('view engine', 'handlebars')

app.use(express.static('public'))

const products = [
    {
      id: '1',
      title: 'Livro',
      price: 12.9
    },
    {
      id: '2',
      title: 'Cadeira',
      price: 200.99
    },
    {
      id: '3',
      title: 'Lâmpada',
      price: 2.0
    },
  ]

  app.get('/', (req, res) => {  // get que vai ser a home
    res.render('home', {products})  // vai dar um render na home mandando os products (produtos)
  })

  app.get('/product/:id', (req, res) => {
    const product = products[parseInt(req.params.id) - 1]  // acessare o indice que veio na url, - 1 
                                                           // porque é um array e o array começa de 0
  
    res.render('product', { product });
  });

  app.listen(3000)