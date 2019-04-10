const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() //remove o ultimo elemento do array
console.log(pilotos)

pilotos.push('Verstappen') //adiciona um elemento na ultima posicao do array
console.log(pilotos)

pilotos.shift() // remove o primeiro elemento do array
console.log(pilotos)

pilotos.unshift('Hamilton') // adiciona um elemento na primeira posicao do array
console.log(pilotos)

// splice pode adicionar e remover elementos
//adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

//remover
pilotos.splice(3, 1)
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) //novo array o (2) é para pegar os pilotos a partir desse indice
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) //pega um pedaço do array
console.log(algunsPilotos2)