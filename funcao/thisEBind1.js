const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // Conflito entre paradigmas: funcional e OO (Orientação à Objeto)

// Utilizando a função BIND
const falarDePessoa = pessoa.falar.bind(pessoa) // pessoa é o argumento do bind
falarDePessoa()

const falar2 = pessoa.falar
falar2()