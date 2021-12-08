console.log ('ey buenas a todos')

let firstName = 'chiquito'
let firstNameWithUpperCase = firstName.toUpperCase()
const lastName = 21
var isDeveloper = true
const list = ['amigos']
list.push('fumar')
const anotherList = list.concat(['porros','cigarros','puros'])

console.log(firstName)
firstName = 'Maracas'
firstName.toUpperCase()
console.log(firstNameWithUpperCase)

console.log(list[0])
console.log(list[1])
console.log(anotherList[3])

const pibe = {
    nombre: 'Diego',
    apodo: 'El Cholo',
    apellido: 'Simeone',
    paises: ['Spain', 'Argentina']
}
console.log(pibe.paises[1])

const buscarPor = 'apodo'
const buscarPorMal = 'ciudad'
console.log(pibe[buscarPor])
console.log(pibe[buscarPorMal])
console.log(pibe['nombre'])
console.log(pibe['name'])

const sumar = (operando1, operando2) => {
    console.log(operando1)
    console.log(operando2)
    return operando1 + operando2
}
console.log(sumar(2,3))

const operando3 = 10
const operando4 = 20
console.log(sumar(operando3,operando4))

function restar (operando5, operando6) {
    return operando5 - operando6
}
console.log(restar(100,1))

'voy por el 38:22 de midu'