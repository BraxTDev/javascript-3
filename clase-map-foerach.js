//Metodo Map()

const number = [1,2,3,4,5]
const squereNumbers = number.map(num => num * num) 

console.log(number)
console.log(squereNumbers)

//Metodo ForEach()

const colors = [ 'Red',  'Pink',    'blue']
const iteratedColors = colors.forEach(color => console.log(color))

console.log(colors)
console.log(iteratedColors)

//ejercicio

const temperatura = [32, 68, 95, 104, 212]

const temperaturaINC = temperatura.map(fahrenheit => (5/9) * (fahrenheit - 32))

console.log( 'temperatura', temperatura)

console.log(temperaturaINC)

//sumando

const newNumbers = [1, 2, 3, 4, 5]

let suma = 0

newNumbers.forEach(number => {
    suma = suma + number
})
console.log(newNumbers)
console.log(suma)