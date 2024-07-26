// Condicional Switch es similiar a la logica, para validar una validacion
//expresion es la condicion que se va a validad
/*switch(expresion) {
    //case son los casos a evaluar
    case valor1: 
    //codigo a ejecutar
    //con el break rompe eñ ciclo y ya termina
    break;
    case valor2:
        //Codigo a ejercutar
    break;
    case valor3:
        //codigo a ejercutar
    break;
    //SE CONVIERTE EN NUESTRO ELSE, VERIFICA SI NINGUNO DE LOS CASOS DE ARRIBA ES VERDAD
    default:
        //Otro Codigo
}
*/

//Ejemplo practico

let expresion =  'Papayas'

switch(expresion) {
    case  'Naranajas':
    console.log('Las naranjas  cuestan 20 pesos"')
    break;
    case  'Manzanas':
    console.log('El costo de las manzabas es de 15 pesos')
    break;
    case  'Uvas':
        console.log('El costo de las uvas es de 13 pesos')
        break;
        case  'Papayas':
            console.log('Las papayas tienen un precio de 26 dolares')
            break;
        default:
        console.log(`Lo siento no contamos con ese ${expresion}`)
}

console.log( 'Hay algo mas que desees?');