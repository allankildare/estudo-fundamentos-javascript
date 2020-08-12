const nome = 'Chata'
const concatenacao = 'Olá ' + nome + '!'
const template = `
    Olá
    ${nome}!`
console.log(concatenacao, template)

// Expressões
const expressao = `1 + 1 = ${1+1}`
console.log(expressao)

// Aplicando uma função
const up = texto => texto.toUpperCase()
console.log(`Eii... ${up('cuidado')}`)