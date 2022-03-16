const express = require("express")
const app = express()
const rotas = express.Router()
const porta = process.env.PORT = 3000
const path = require('path')

app.use(rotas)
app.use(express.json())

app.set('views', path.join(__dirname, './'))
app.set('view engine', 'ejs' )

rotas.get('/', (req, res) => {
    res.send('Rota raiz encontrada')
})

rotas.get('/ola', (req, res) => {
    res.send('Rota Olá encontrada')
})

rotas.get('/compras', (req, res) => {
    res.send('Rota Compras encontrada')
})

rotas.get('/index', (req, res) => {
    // res.sendFile(path.join(__dirname + '/index.html'))
    res.render(path.join(__dirname + '/index.ejs'), {
        title: 'AAAAAAAAAAA',
        mensagem: "Mensagem",
        titulo: "Título aqui",
        autor: "Gustavo Felício"
    })
})

app.listen(porta, () => {
    console.log('Server na porta', porta)
});