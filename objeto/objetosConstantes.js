// pessoa -> 123 -> {...}
const pessoa = { nome: 'Joao' }
pessoa.nome = 'Angelo'
console.log(pessoa)

// pessoa -> 456 -> {...} 
//pessoa = { nome: 'Karol'}

//o objeto fica "congelado"
Object.freeze(pessoa)

pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome
console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze ({ nome: 'Karol'})
console.log(pessoaConstante)