// operador ... rest(juntar)/spread(espalhar)
//usar rest com parâmetro de função

//usar spread com objeto

const funcionario = {nome: 'maria', salario: 12358.98}
const clone = {ativo: true, ...funcionario}
console.log(clone)

// usar spread com array
const grupoA = ['João', 'Pedro', 'gloria']
const grupoFinal = ['maria', ...grupoA, 'Rafael']
console.log(grupoFinal)