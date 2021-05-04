function contar() {
    // Pego os valores da caixa de texto pela ID e armazeno nas variáveis
    let inicio = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let passo = document.getElementById('passo')
    let res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) { // Verifica se a caixa de texto está vazia
        alert('[ERRO] O campo está vazio!')
        res.innerHTML = 'Impossível contar!'
    } else {
        res.innerHTML = 'Contando: '
        // Converto os valores recebidos em formato de string e passo para Number
        let i = Number.parseInt(inicio.value)
        let f = Number.parseInt(fim.value)
        let p = Number.parseInt(passo.value)

        if (p <= 0) {
            alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f) {
            for (let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F449}` // Adicionando emojis
            }
        } else {
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}