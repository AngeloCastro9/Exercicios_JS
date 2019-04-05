function Pessoa() {
    this.idade = 0

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000) // intervalo que ele vai ficar repetindo a função
}

new Pessoa