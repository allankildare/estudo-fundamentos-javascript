// Par Nome / Valor
const saudacao = "opa" // Contexto léxico 1

function exec() {
    const saudacao = "Falaaa" // Contexto léxico 2
    return saudacao
}

// Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua Major Ávila',
        bairro: 'Tijuca'
    }
}
console.log(saudacao)
console.log(exec())
console.log(cliente)