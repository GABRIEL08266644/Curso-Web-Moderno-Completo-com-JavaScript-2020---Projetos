function soBoaNoticia(nota) {
    if (nota >= 7) {
        console.log(('é verdade...' + valor))
    }
}

soBoaNoticia(8.1)
soBoaNoticia(5.5)

function seForVerdadeEuFalo(valor) {
    if (valor) {
        console.log(`é verdade... ${valor}`)
    }
}

//falsos
seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo('')

//verdadeiros
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo(' ')
seForVerdadeEuFalo('?')
seForVerdadeEuFalo([])
seForVerdadeEuFalo([1, 2])



