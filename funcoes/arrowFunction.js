// arrow function

const ola = () => console.log('ola')
ola()

// arrow funcition sem o return se tiver um unico 
//parametro pode tirar os parenteses

const saudacao = (nome) => "Fala" + nome + "!!!"
const saudacao2 = nome => "Fala" + nome + "!!!"
const saudacao3 = nome => `Fala ${nome}!!!`

const somar = numeros => {
    let total = 0
    for(let n of numeros) {
        total += n
    }
    return total
}

console.log(somar([1,2,3]))


// quando se aplica "..." em um dos parametros da funcao ele pega todos 
// os dados passados e transforma em um array
const somar2 = (...numeros) => {
    let total = 0
    for(let n of numeros) {
        total += n
    }
    return total
}

console.log(somar2(1,2,3))