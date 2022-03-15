
const exec = (fn, a, b) => fn(a, b)

const somarNoTerminal = (x, y) => console.log(x + y)

const subtrairNoTerminal = (x, y) => {
    const resul = x - y
    return console.log(resul)
}


exec(somarNoTerminal, 56, 38)
exec(subtrairNoTerminal, 182, 27)