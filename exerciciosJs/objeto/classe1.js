class lancamento {
    constructor(nome = 'generico', valor = 0) {
        this.nome = nome
        this.valor = valor
    }
}

class ciclofinaceiro {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addlancamentos(...lancamentos) {
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    sumario() {
        let valorConsolidado = 0
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

const salario = new lancamento('salario', 4.500)
const contaLuz = new lancamento('luz', -200)

const contas = new ciclofinaceiro(6, 2018)
contas.addlancamentos(salario, contaLuz)
console.log(contas.sumario())