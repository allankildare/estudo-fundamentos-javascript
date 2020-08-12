// Função sem retorno
function imprimirSoma (a, b) {
    console.log(a + b) 
}

imprimirSoma(2, 3)
imprimirSoma(2, 9)
imprimirSoma(2)
imprimirSoma(2, 7, 12, 56, 7, 0)
imprimirSoma()

// Função com retorno
function soma(a, b=0) { // Usa zero como valor padrão para b
    return a + b
}
console.log(soma(2, 5))
console.log(soma(2))
