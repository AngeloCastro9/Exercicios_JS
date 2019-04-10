const quaseArray = {0: 'Angelo', 1: 'Karol', 2: 'Marcos'}
console.log(quaseArray)
Object.defineProperty(quaseArray, 'toString', {
    value: function() {
        return Object.values(this)
    },
    enumerable: false
})

console.log(quaseArray[0])

const meuArray = ['Angelo', 'Karol', 'Marcos']
console.log(quaseArray.toString(), meuArray)