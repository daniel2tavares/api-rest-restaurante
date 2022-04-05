const Express = require('express')
const cors = require('cors')
const bd = require('./src/data/sqlite-bd.js')
const port = 3003
const app = Express()
const funcController = require('./src/controllers/func-controllers.js')
const criarDb = require('./src/data/criar-bd.js')

app.use(Express.json())
app.use(cors())

criarDb()
funcController(app, bd)

app.listen(port, () => {
    console.log(`O Servidor está rodando em: http://localhost:${port}`)
  })