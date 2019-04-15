// não aceita repetição/não indexada
const times = new Set()
times.add('vasco')
times.add('sao paulo').add('palmeiras').add('flamengo')
times.add('vasco') //vai ser ignorado

console.log(times)
times.delete('flamengo')
console.log(times)

const nomes = ['raquel', 'lucas', 'julia', 'lucas']
const nomeSet = new Set(nomes)
console.log(nomeSet)