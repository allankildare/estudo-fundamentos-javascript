const escola = "Cod3r"

console.log(escola.charAt(4)) // Retornar caractere do índice 4
console.log(escola.charAt(0)) 

/* Retornar caractere de acordo com a tabela UNICODE */
console.log(escola.charCodeAt(3)) 

/* Retornar o índice onde se encontra a string 3 */
console.log(escola.indexOf('3'))

/* Retornar a partir de tal índice */
console.log(escola.substring(1)) // Aplicando o índice inicial
console.log(escola.substring(0, 3)) // Vai do índice 0 ao 2

/* Concatenando */
console.log("Escola ".concat(escola).concat('!'))

/* Substituindo */
console.log(escola.replace(3, 'e'))

/* Aplicando o Array */
console.log("Ana, Maria, Pedro".split(','))