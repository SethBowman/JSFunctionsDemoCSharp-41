
//function keyword first (most common)
function greet(name) {
    console.log(`Hello, ${name}!`)
}

greet("Seth")
greet(12)
greet(false)

function multiply(a, b) {
    return a * b
}

let twoThingsMultiplied = multiply(5, 5)
console.log(twoThingsMultiplied)

function printMultTable(number) {
    for(let i = 1; i <= 10; i++) {
        let result = multiply(number, i)
        console.log(`${i} x ${number} = ${result}`)
    }
}

printMultTable(5);

//function keyword stored into a variable
let add = function(a, b) {
    return a + b;
}

let added = add(2, 2)


//anon function (function without a name) / arrow notation

let add2 = (a, b) => a + b

let added2 = add2(5, 5)

console.log(added)
console.log(added2)