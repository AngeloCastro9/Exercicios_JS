function fun1() {}

//armazenando em uma variavel
const fun2 = function() { }

//armazenando em um array
const array = [function (a, b) {return a + b}, fun1, fun2]
console.log(array[0](2,3))

//armazenar em um atributo de objeto
const obj = {}

obj.falar = function() {return 'opa'}
console.log(obj.falar())

//passar funcao como parametro
function run (fun) {
    fun()
}

run(function() { console.log ('executando...')})