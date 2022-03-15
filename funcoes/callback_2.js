
// blibiotecas do node
const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, 'dados.txt')
console.log(path.join(__dirname, 'dados.txt'))



fs.readFile(caminho,  (_, conteudo) => console.log(conteudo.toString()),)
