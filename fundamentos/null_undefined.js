let valor // Não inicializada
console.log(valor)
// console.log(valor2) // Nem foi declarada -> Gera erro!

valor = null // ausência de valor -> Não aponta pra nenhum endereço de memória
console.log(valor)
// console.log(valor.toString) // Erro! 

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.5
console.log(produto.preco)

produto.preco = undefined // Evitar atribir undefined
console.log(!!produto.preco)
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)

console.log(produto)