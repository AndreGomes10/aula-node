const express = require('express')
const app = express()

app.use(  // configurar o express pra poder pegar o body
  express.urlencoded({
    extended: true,
  }),
)

app.use(express.json())

// rotas - endpoints

app.post('/createproduct', (req, res) => {
  const name = req.body.name
  const price = req.body.price

  console.log(name)
  console.log(price)

  if(!name){
    // status 422 é quando da erro
    res.status(422).json({message: 'O campo nome é obrigatório'})
  }

  // status 201 quando o usuario cadastra no sistema, para inserção no sistema
  res.status(201).json({message: `O produto ${name} foi criado com sucesso!`})
})
app.get('/', (req, res) => {

  // status 200 pra saber que esta tudo certo
    res.status(200).json({message: 'Primeira rota criada com sucesso!'})

    return  // pra parar a execução quando da erro
})

app.listen(3000)