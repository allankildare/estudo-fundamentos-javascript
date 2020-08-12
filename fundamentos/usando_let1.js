var numero = 1
{ 
    let numero = 2 // Procura no escopo mais próximo
    console.log('Dentro: ' + numero)
}
console.log('Fora: ' + numero)

// Let é sensível ao escopo //