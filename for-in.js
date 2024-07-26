/* 


for in ---> Objectos

propiedades = valor

arrays, strings

item
por cada elemento  o
for (variable in objectonq que vamos a estar  iterando) 
*/

//Un objecto
const listaDeCompras =  {
    manzana: 5,
    pera: 3,
    naranja: 2,
    uva: 1
}
//iterar sobre estas propiedades

for (frutas in listaDeCompras) {
    console.log(frutas)
}

for (frutas in listaDeCompras) {
    console.log(`${frutas} : ${listaDeCompras[frutas]}`)
}

for(fruta of listaDeCompras) {
    console.log(frutas);
}