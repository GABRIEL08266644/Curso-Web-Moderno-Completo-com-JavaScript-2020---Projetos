Array.prototype.forEach = function(callback) {
    for(let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}

const aprovado = ['agatha', 'aldo', 'daniel', 'raquel']

aprovado.forEach(function(nome, indece) {
    console.log(`${indece + 1}) ${nome}`)
})