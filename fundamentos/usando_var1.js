{
    {
        {
            { var sera = 'Será?'} // Estará visível independente do bloco
        }
    }
}
console.log(sera)

function teste() {
    var local = 12345
    console.log(local)
}
teste ()

// console.log(local) -> Dá erro, pois o ESCOPO de local não pode ser acessado