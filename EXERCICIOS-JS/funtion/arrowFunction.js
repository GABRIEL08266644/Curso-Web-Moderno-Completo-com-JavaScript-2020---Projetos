let dobro = function (a) {
    return 2 * a
}

dobro1 = (a) => {
    return 2 * a
}

dobro2 = a => 2 * a //return implicito

console.log(dobro(Math.PI))

let ola = function () {
    return 'ola mundo'
}

ola = () => 'ola mundo'
ola = _ => 'ola mundo' //possui um param
console.log(ola())