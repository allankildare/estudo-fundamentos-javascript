const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir) // Passa como parâmetro o nome e indice
fabricantes.forEach(fabricante => console.log(fabricante))