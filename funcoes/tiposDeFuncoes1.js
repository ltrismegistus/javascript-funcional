// ##funcition declaration##
function bomDia() {
    // funcao simples que retorna uma string
    // para chamala preciso declarar ela fora desse escopo
    console.log('Bom dia!')
}

bomDia()

// ##function expression##
// Nada mais e que armazenar uma funcao dentro de uma constante ou variavel
const boaTarde = function() {
    console.log('Boa tarde!')
}

boaTarde()

// funcao que retorna algo
function somar(a, b) {
    return a + b
}
const resultado = somar(3, 4)
console.log(resultado)

