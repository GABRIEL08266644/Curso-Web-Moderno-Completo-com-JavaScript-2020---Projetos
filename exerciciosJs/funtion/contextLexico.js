const valor = 'global'

function minhaFunction() {
    console.log(valor)
}

function exec() {
    const valor = 'local'
    minhaFunction()
}

exec()