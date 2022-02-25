const somar3numeros = function(n1) {
    return function(n2) {
        return function(n3) {
            return n1 + n2 + n3
        }
    }
}

console.log(somar3numeros(1)(1)(1))

function somar(a, b){
    return a + b
}
function sub(a, b){
    return a - b
}
function mul(a, b){
    return a * b
}
function div(a, b){
    return a / b
}
const calc  = function(n1) {
    return function(n2) {
        return function(fn) {
            return fn(n1, n2)
        }
    }
}

console.log(calc(1)(0)(div))