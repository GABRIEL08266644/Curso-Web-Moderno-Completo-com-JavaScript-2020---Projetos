function pessoa() {
    this.idade = 0

    setInterval( () => {
        this.idade++
        console.log(this.idade)
    }/*.bind(this)*/, 1000)
}

new pessoa