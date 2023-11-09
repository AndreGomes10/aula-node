const express = require('express')
const app = express()

app.use(  // configurar o express pra poder pegar o body
  express.urlencoded({
    extended: true,
  }),
)

app.use(express.json())

// rotas - endpoints
app.get('/', (req, res) => {
    res.json({message: 'Primeira rota criada com sucesso!'})
})

app.listen(3000)