function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('input#txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano) { //Verifica se os dados estão vazios ou o ano está acima do atual
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        // res.innerHTML = `Idade calculada: ${idade} anos`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) { // Criança
                img.setAttribute('src', 'foto-bebe-m.png')
            } else if (idade < 21) { // Jovem
                img.setAttribute('src', 'foto-jovem-m.png')
            } else if (idade < 50) { // Adulto
                img.setAttribute('src', 'foto-idoso-m.png')
            } else { // Idoso

            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) { // Criança
                img.setAttribute('src', 'foto-bebe-f.png')
            } else if (idade < 21) { // Jovem
                img.setAttribute('src', 'foto-jovem-f.png')
            } else if (idade < 50) { // Adulto
                img.setAttribute('src', 'foto-idoso-f.png')
            } else { // Idoso

            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img) // Adiciona um elemento
    }
}