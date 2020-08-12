console.log(Math.ceil(6.1)) // Arredondar para cima (ceil)
console.log(Math.floor(6.1)) // Arredondar para baixo (floor)

const obj1 = {}
obj1.nome = 'Bola'
// obj1['nome'] = 'Bola2' -> não é uma boa prática, mas corresponde à mesma de cima
console.log(obj1.nome)

function Obj (nome) {
    this.nome = nome // Torna o atributo público
    this.exec = function () {
        console.log('Exec')
    }
}

const obj2 = new Obj('cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()