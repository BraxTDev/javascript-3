//1. Tipo entero y decimal

const entero = 42
const decimal = 3.14

console.log(typeof entero, typeof decimal)

//2. Notacion cientifica

const cientifico = 5e3 
console.log()

//Infinitos y NaN

const infinitos = Infinity

const NoesNumero = NaN

//Operaciones Arimeticas

//1. Primer Grupo: Suma, resta, multiplicacion, division

const suma = 10 + 10 // 20

const resta = 10 - 5 // 5

const multiplicacion = 4 * 4 // 16

const division = 4/4 // 1

// 2. Modulo y explonenciacion

const modulo = 15 % 8

const explonenciacion = 2 ** 3

//precision

const resultado =  0.1 + 0.2
console.log(resultado)
console.log(resultado.toFixed(1))
console.log( resultado === 0.3)

// Operaciones avanzadas raiz cuadrada de un numero

const RaizCuadrada = Math.sqrt(16)
const ValorAbsoluto = Math.abs(-7)
const aleatorio = Math.random()
console.log(RaizCuadrada, ValorAbsoluto, aleatorio)
