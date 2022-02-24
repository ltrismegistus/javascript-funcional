const somar3numeros = function(n1) {
    return function(n2) {
        return function(n3) {
            return n1 + n2 + n3
        }
    }
}

console.log(somar3numeros(1)(1)(1))

const calc  = function(n1) {
    function somar(n1, n2){
        return n1 + n2
    }
    return function(n2) {
        return somar(n1,n2)
    }
}

console.log(calc(1)(1)(somar))