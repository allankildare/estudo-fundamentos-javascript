function compras (trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2 // OU -> Importa que apenas um dos dois seja verdadeiro
    const comprarTV50 = trabalho1 && trabalho2 // E -> Os dois devem ser verdadeiros
    // const comprarTV32 = !!(trabalho1 ^ trabalho2) // OU exclusivo -> bitwise xor, primeiro converte em booleano, depois usa o ^
    const comprarTV32 = trabalho1 != trabalho2 // outra forma de escrever o ou exclusivo (xor)
    const manterSaudavel = !comprarSorvete // operador unário

    return {comprarSorvete, comprarTV50, comprarTV32, manterSaudavel} // ES2015 - Está implícito o nome da chave

}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))