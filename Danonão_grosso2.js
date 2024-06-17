let resposta = document.getElementById('resposta')

function convertion(){
    let grau = Number(document.getElementById('grau').value)

    let PSI = 0.0193367801
    let fim = (grau * PSI)
    console.log(fim)
    resposta.innerHTML = grau + 'mmHg para PSI é =  ' + fim
    resposta.style.fontSize = '30px'
    resposta.style.color = 'white'
    resposta.style.position = 'relative'
    resposta.style.top = '-420px'
    resposta.style.fontFamily = 'Impact'
    resposta.style.webkitTextStroke = '2px black'
    resposta.style.textShadow = '0px 2px 4px black'
}

function convertion2(){
    let pounds = Number(document.getElementById('pounds').value)

    let PSI = 0.0193367801
    let fim = (pounds * 51.714925111)
    console.log(fim)
    resposta.innerHTML =pounds + ' PSI para mmHg é =  ' + fim
    resposta.style.fontSize = '30px'
    resposta.style.color = 'white'
    resposta.style.position = 'relative'
    resposta.style.top = '-100px'
    resposta.style.fontFamily = 'Impact'
    resposta.style.webkitTextStroke = '2px black'
    resposta.style.textShadow = '0px 2px 4px black'
}

