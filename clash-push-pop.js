//Metodos que modifican el asrray original (mutabilidad)

//Push()
const paises = [ 'USA' , 'CANADA',  'UK']
//agregarle otro
const NuevoPais = paises.push( 'Colombia',  'Germany')

console.log(paises)
console.log(NuevoPais)


//metodo pop, nos elemina el ultimo elemento del array

const EliminarUltimoPais = paises.pop()


console.log(EliminarUltimoPais)
console.log(paises)
