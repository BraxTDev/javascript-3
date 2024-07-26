// capacidades que tienen las funciones al igual que otros objectos

// 1. pasar funciones como argumentos --> Callback es una  funcion que se pasa como argumentos

function a (){}
function b (a) {}
b(a)


//retornar funciones

function a () {
    function b () {}
    return b 
}

//asignar funciones a variables -> expresion de funcion 

const a = function() {}

//Tener propiedades y metodos

function a () {}
const obj = {}
a.call(obj)

//Anidar funciones -> Nested functions

function a () {
    function b () {
        function c () {

        }
    }
    
}

//es posible alamacenaf funciones en objetos

const rocket = {
    name:  'Falcon 9',
    launchMessage: function launchMessage () {
        console.log('💻')
    }
}


rocket.launchMessage ()