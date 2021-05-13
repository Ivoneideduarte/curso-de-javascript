let valores = [8, 7, 9, 4, 1, 2]
valores.sort() // Organiza os valores em ordem crescente

for(let pos in valores) { // Para cada posição em valores(variável composta)
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}