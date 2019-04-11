const alunos = [
    { nome: 'Joao', nota: 7.3, bolsista: false},
    { nome: 'Maria', nota: 9.2, bolsista: true},
    { nome: 'Angelo', nota: 9.8, bolsista: false},
    { nome: 'Ana', nota: 8.7, bolsista: true}

]

// Todos os alunos são bolsitas?
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista). reduce(todosBolsistas))

//algum aluno é bolsistas?
const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map( a => a.bolsista).reduce(algumBolsista))