function bomDia() {
    console.log('Bom dia')
}
const boaTarde = function() {
    console.log('Boa tarde')
}

function execultarQualquerCoisa(fn) {
    if(typeof fn == 'function') {
        fn()
    }
}

execultarQualquerCoisa(3)
execultarQualquerCoisa(bomDia)
execultarQualquerCoisa(boaTarde)

// Retornar uma funcao a partir de uma outra funcao

// function potencia(base, exp) {
//     return Math.pow(base, exp)
// }

// const bits8 = potencia(2, 8)
// console.log(bits8)


function potencia(base) {
    return function(exp) {
        return Math.pow(base, exp)
    }
}

const potenciadDe2 = potencia(2)
console.log(potenciadDe2(8))

console.log(potencia(2)(8))