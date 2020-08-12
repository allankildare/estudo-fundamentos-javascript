function teste1(num) { // Chaves se tornam opcional caso haja apenas uma sentença ligada ao if
    if(num > 7)
        console.log(num)
        console.log('Final')
}

teste1(6)
teste1(8)

function teste2(num) {
    if(num > 7)
        ; // Sentença de código vazia, CUIDADO COM O PONTO E VÍRGULA
    {
        console.log(num)
    }
}

teste2(6)
teste2(8)