function outerFunction () {
    let outerVariable =   'I am from outwe function'
    function innterFunction () {
        console.log(outerFunction)
    }
    return innterFunction
}

const closureExample =  outerFunction()
closureExample()

function createCounter () {
    let count = 0

    return function() {
        count++
        console.log(count)
    }
}

const counterA = createCounter()
counterA()
counterA()


const counterB = createCounter()
counterB()


function outer () {
    let message =   'Hello, '
    function innter (name) {
        console.log(message + name)

    }
    return innter
}

const closureA = outer()

const closureB = outer()

closureA("Alice")
closureA("Bob")
