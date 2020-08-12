const prod1 = {}
prod1.nome = 'Smartphone Foda'
prod1.preco = 500.60
console.log(prod1)

prod1['desconto legal'] = 0.4 // Evitar atributos com espaço
prod1['valor_final'] = prod1.preco - (prod1.preco * prod1['desconto legal']) // Aplicando desconto
console.log(prod1)

const prod2 = {
    nome: 'Allan',
    sobrenome: 'Kildare' 
}
console.log(prod2)
console.log(prod2.nome + ' ' + prod2.sobrenome)