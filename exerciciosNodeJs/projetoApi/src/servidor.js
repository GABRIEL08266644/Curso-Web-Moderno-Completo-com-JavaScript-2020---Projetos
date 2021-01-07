const porta = 3003

const express = require('express')
const app = express()

/*app.get('/produtos', (req, res, next) => {
    console.log('middleware 1')
    next() //cuidado com next sem ele nn funciona
})*/

app.get('/produtos', (req, res, next) => {
    res.send({ nome: 'Notebook', preco: '123,12' }) //converte pra JSON
})

app.listen(porta, () => {
    console.log(`servidor esta executando na porta${porta}`)
})