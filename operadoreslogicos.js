//Operadores Logicos

// && si este valor y este valor hace esto pasa esto
//|| si valor a o b se cumplen podemos continuar
//! negacion, si este valor no es esto 

const a = 10
const b = 20
const c = "10"

// &&

console.log( a == b && a === c )
// miramos si a es dirente a b || o  a === c
console.log(a != b ||a === c )
//NOt ! a en valor es igualn a b, pero en el tipo de valor es difireente, con la negacion, convertimos ese false en un  true, ! convertir unn false en un true

console.log(!(a === b))