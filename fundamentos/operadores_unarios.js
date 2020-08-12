let num1 = 1
let num2 = 2

num1++ // Pós fixada
console.log(num1)
--num1 // Pré fixada
console.log(num1)
// Logo, a forma pré fixada é mais "apressada", então é executada antes

console.log(++num1 === num2--) // === Estritamente igual
console.log(num1 === num2)