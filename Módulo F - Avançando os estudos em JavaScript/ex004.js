let num = [4, 5, 6, 7, 8]

let pos = num.indexOf(6) // Verifica se existe o valor 6 dentro do vetor e retorna a posição dele

if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor está na posição ${pos}`)
}