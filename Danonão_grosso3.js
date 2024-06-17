let resposta = document.getElementById('resposta')

function convertion1(){
    let cel = Number(document.getElementById('cel').value)
    let fim = (cel * 9 / 5) + 32
    console.log(fim)
    resposta.innerHTML = cel + "° convertido para Farenheit é " + fim + "°F"
    resposta.style.fontSize = '30px'
    resposta.style.color = 'white'
    resposta.style.position = 'relative'
    resposta.style.top = '-300px'
    resposta.style.fontFamily = 'Impact'
    resposta.style.webkitTextStroke = '2px black'
    resposta.style.textShadow = '0px 2px 4px black'
}

function convertion2(){
    let fare = Number(document.getElementById('fare').value)
    let fim2 = (fare - 32) * 5 / 9
    console.log(fim2)
    resposta.innerHTML = fare + "F° convertido para Farenheit é " + fim2 + "°"
    resposta.style.fontSize = '30px'
    resposta.style.color = 'white'
    resposta.style.position = 'relative'
    resposta.style.top = '10px'
    resposta.style.fontFamily = 'Impact'
    resposta.style.webkitTextStroke = '2px black'
    resposta.style.textShadow = '0px 2px 4px black'
}