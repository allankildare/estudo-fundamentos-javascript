function tratarErro (erro) {
    throw new Error ('Erro na execução do script')
    // throw 10
    // throw true
    // throw 'erro'
}

function imprimirNomeGritado (obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    }
    catch (e) {
        tratarErro (e)
    }
    finally {
        console.log('final')
    }
}

const obj = { name: 'Roberto' }
imprimirNomeGritado(obj)