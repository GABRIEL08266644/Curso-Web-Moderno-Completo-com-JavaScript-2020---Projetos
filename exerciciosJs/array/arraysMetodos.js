const pilotos = ['vettel', 'alonso', 'raikkonem', 'massa']
pilotos.pop() //massa quebour o carro!!
console.log(pilotos)

pilotos.push('verstappen')
console.log(pilotos)

pilotos.shift() //remove o primerio!
console.log(pilotos)

pilotos.unshift('hamilton')
console.log(pilotos)

//splice pode adicionar e remover elementos

//adicionar
pilotos.splice(2, 0, 'bottas', 'massa')
console.log(pilotos)

//remover
pilortos.splice(3, 1)//massa quebrou
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) //novo array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) //novo array
console.log(algunsPilotos2)