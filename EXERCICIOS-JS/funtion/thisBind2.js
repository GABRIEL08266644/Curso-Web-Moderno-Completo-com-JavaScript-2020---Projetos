function pessoa() {
    this.idade = 0

    const self = this //nao deixa this variar 
    setInterval(function() {
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000)
}

new pessoa