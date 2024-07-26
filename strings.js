let string1 =  'Hola, Mundo'
let string2 =  "Hola, mundo"
let string3 =  `${string1} feliz  :)`  // CON ESTA PODEMOS  sumar concatenacion con otro string que seria string1
//otra forma que concatenar
let string4 = string1 +  ' ' + string2 // una forma de darle espacios a nuestros strings
console.log(string1)
console.log(string2)
console.log(string3)
console.log(string4)

//Saber lq longutid de esta frase
//ahora quiero que todas la frase en mayuscula
//Poner las palabras de la frase en minuscula toLocaleLowerCase
//poner la palabra en mayuscula toLocaleUpperCase
let frase =  'JavaScript es Extramadamente Genial'
console.log(frase.length)
console.log(frase.toLocaleUpperCase())
console.log(frase.toLocaleLowerCase())
//Tomar solo una palabra por ejemplo Javascript, que tenga una parte de ese string osea la primera frase
console.log(frase.substring(0, 10)) // tomamos la posicion que queremos y la traermos hasta donde queremos que termmine, aca empieza en la 0 y termina en la 10, asi mismo siendo "javascript"