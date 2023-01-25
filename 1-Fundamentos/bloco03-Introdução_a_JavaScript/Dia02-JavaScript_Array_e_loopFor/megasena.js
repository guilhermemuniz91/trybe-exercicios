// números escolhidos

let jogo = [05, 12, 19, 30, 44, 58]

// criando o sorteio

let n1 = Math.floor(Math.random() * 60) + 1
let n2 = Math.floor(Math.random() * 60) + 1
let n3 = Math.floor(Math.random() * 60) + 1
let n4 = Math.floor(Math.random() * 60) + 1
let n5 = Math.floor(Math.random() * 60) + 1
let n6 = Math.floor(Math.random() * 60) + 1

let resultadoMega = [n1, n2, n3, n4, n5, n6]

console.log(resultadoMega)


// percorrendo os dois arrays

for (let index = 0; index < jogo.length; index += 1) {
    console.log(jogo[index])
}


// comparando o jogo com o sorteio




// imprimindo o resultado