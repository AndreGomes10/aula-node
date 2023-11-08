const http = require('http')
const fs = require('fs')
const url = require('url')

const port = 3000

const server = http.createServer((req, res) => {
  var q = url.parse(req.url, true)
  var filename = q.pathname.substring(1)  // com o 1 vamos pegar o segundo caracter

  //console.log(filename)

  if (filename.includes('html')) {  // vai ler só se for arquivo html, senão não vai abrir
    if (fs.existsSync(filename)) {  // verificar se o arquivo existe
      fs.readFile(filename, function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write(data)
        return res.end()
      })
    } else {
      fs.readFile('404.html', function (err, data) {
        res.writeHead(404, { 'Content-Type': 'text/html' })
        res.write(data)
        return res.end()
      })
    }
  }
})

server.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`)
})