function contar() 
{
    // Pego os valores da caixa de texto pela ID e armazeno nas variáveis
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')
    // Converto os valores recebidos em formato de string e passo para Number
    var i = Number.parseInt(inicio.value)
    var f = Number.parseInt(fim.value)
    var p = Number.parseInt(passo.value)
    
    for(var i; i <= f; i++) {
        res.innerHTML = `Contando: <strong>${i}</strong>`
    }
}