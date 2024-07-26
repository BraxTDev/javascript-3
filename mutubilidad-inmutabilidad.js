//  creando un array

//Primera forma  new array o array()

const fruits = Array( 'Apple',  'Orange' ,  'Banana', 'Orange')
console.log(fruits)
//forma incorrecta

/*
const JustOneNumber = array(12)
console.log(JustOneNumber)

*/

const number = [1,2,,4,5,6,7,8,9,0,]
console.log(number)

//2 sintaxis literal array

const oneNumber = [4]
console.log(oneNumber)

//arays vacios

const emptyArray = []
console.log(emptyArray)

//arrrays de muchos datos strings

const sports = [ 'Soccer',  'Baskeball' ,  'Tennis',   'Rugby',  'UFC']
console.log(sports)

const recipeIngredientes = [
    'Flour',
    true,
    2,
    {
        ingredient:  'Milk', quantity:  '1 Cup'
    },
    false
]
console.log(recipeIngredientes)

//acceder a un array

//Accesing arrays elements

const firstFruit = fruits[0]
console.log(firstFruit)

// length proiedad

const Number0FFRUITS = fruits.length 
console.log(Number0FFRUITS)

//mutubalidad y inmutabilidad

//Mutabilidad
//agregamos otro a la lista que ya teniamos
fruits.push( 'Watermelo')
console.log(fruits)
//inmutabilidad
//juntar un array con otro array

const newFruits = fruits.concat([ 'Grape',  'Kiwi'])
console.log(fruits)
console.log(newFruits)

//checking array width array.isarray // comprobamo si esto es un array  true 
const isArray = Array.isArray(fruits)
console.log(isArray)

//practical exercice: suma de todos los elementos de un array

const numberArray = [1, 2, 3, 4, 5, 6]
let suma = 0 


for (let i = 0;  i < numberArray.length; i++)  {
    suma += numberArray[i]
}
console.log(suma)

