//Funciones puras 


// Side Effects
// 1. Modificar variables globales
//2. Modificar parametros
//3. Solicitudes HTTP
//4 Imprimir mensajes o pantalla o consola
//5 Manipulacion del dom
//Obtener la hora actual

function suma (a, b) {
    return a + b 

}

//Funcion impura modificacion de la funciobn inpur


function suma (a, b) {
    console.log('A', a)
    return a + b 

}

let total = 0 

function sumWithSideEffect (a) {
    total += total 
    return total
}
//Funcion Pura
function square(x)
{
    return x * x
}

function addTen (y) {
    return y + 10
} 

const number = 5
const finalResult = addTen(square(number))
console.log(finalResult)