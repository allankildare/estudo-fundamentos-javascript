function Pessoa() {
    this.idade = 0

    const self = this 
    setInterval(function() {
        self.idade++ // Incremetando
        console.log(self.idade)
    }/*.bind(this)*/, 1000) // a cada x milissegundos a função vai ser disparada
}

new Pessoa // Instanciando