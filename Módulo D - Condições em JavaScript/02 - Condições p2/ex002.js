var idade = 15

console.log(`Você tem ${idade} anos.`)
if (idade < 16) {
    console.log('Você não vota')
} else if (idade < 18 || idade > 65) {
    //(idade >= 16 && idade < 18) 
    console.log('Seu voto é opcional')
} else {
    //(idade >= 18)
    console.log('Seu voto é obrigatório!')
}