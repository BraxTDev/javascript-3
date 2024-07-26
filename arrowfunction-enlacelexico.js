//Arrow function
// estamos creando una expresion de funcion

const greeting = function (name) {
    return `Hi, ${name}`
    
}


//es la misma expresion y funcion solo que con la flecha aplicamos la function

const NewGreeting =  (name) => {
    return `Hi, ${name}`
    
}

//arrow Function - implicit return

const NewGreetingImplicit =  name =>  `Hi, ${name}`
// si debemos agregar los () si queremos poner mas funciones
const NewGreetingImplicitTwoParametres =  (name, lastname) =>  `Hi, ${name} ${lastname}`


//Lexical Binding

//crear un objeto
const finctionalCharacter = {
    //Un nombre dentro de ese objeto
    name: "Uncle Ben",
    //un metodo que es el mensaje del tio ben
    messageWidthTraditionalFunction:  function (message) {
        console.log(`${this.name} says: ${message}`)
    },
    messageWidthArrowFunction:   (message) => {
        console.log(`${this.name} says: ${message}`)
}}

finctionalCharacter.messageWidthTraditionalFunction("With reat powe comes great responsability")
finctionalCharacter.messageWidthArrowFunction("Cuidado con el doctor otopus")

