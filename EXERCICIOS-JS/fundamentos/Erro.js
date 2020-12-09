function tratarErro() {
    //throw new Error('...')
    //throw 10
    //throw true
    //throw 'messagem'
    throw {
        nome: erro.name, 
        msg: erro.messagem,
        date: new Date
    }
}

function imprimir(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!')
    } catch (e) {
        tratarErro(e)
    } finally {
        console.log('final')
    }
}

const obj = {nome: 'roberto'}
imprimir(obj)