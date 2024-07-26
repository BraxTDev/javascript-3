//Operadores de comparacion

// dos iguales, en vez de asignarle el valor a una variable, nos va a ayudar comparar si algo es igual a otra cosa  ==


// este operador si algo es igual a algo,. va verificar una verificacion en la igualdad sea el mismo valor y si el valor es igual de izquierda a derecha nos dara un true y si no son iguales nos dara un false  === igualdad

// Si este objeto o este valor es diferente a otro valor, genera una negacion (Si este objeto es diferente de este otro valor) != 


// !== diferente de  este valor es diferente a este valor, porque es diferente  a este valor y a este otro

//> ver si un valor es mayor

//< cuando un valor es menor a este 

//>= si es mayor o igual a este otro valor

//<= Si es menor o igual que

//Ejemplos

const a = 10 // == estamos comparando si 10 es igual a 20 // la variable a es igual a la variable b
const b = 20
const c =  '10'
//Validacion

// cuando utilizamos los === hacemos 2 validaciones 1 el valor es igual y luego es el tipo del valor, no se cumple la comparacion
//==
a == b;
console.log('Si a es igual a b me debe dar verdadero o si no lo es me deberia dar false:', a == b)
//!= seria true ya que son diferentes valores los dos
console.log("Si a es diferente a C me deberia dar verdadero". a != c)
// !== diferente los dos valores
console.log(a !== c)
// > Mayor
console.log(a > b)
// < Menor
console.log(a < b)
// <= menor o igual que
console.log(a <= b)
// >=
console.log(b >= a)

