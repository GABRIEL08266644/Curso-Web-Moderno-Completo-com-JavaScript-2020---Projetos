const dados = require('dados.txt')


new Promise(function(resolve) {
    resolve(dados)
})
.then(console.log)