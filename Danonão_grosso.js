let resposta = document.getElementById('resposta')

function functionCalcular(){
    const base = Number(document.getElementById('base').value)
    const alt = Number(document.getElementById('alt').value)
    console.log(base)
    console.log(alt)

    let total = (base * alt) / 3
    console.log(total)

    resposta.innerHTML = 'O volume do triângulo é de ' + total
    resposta.style.fontSize = '30px'
    resposta.style.color = 'white'
    resposta.style.position = 'relative'
    resposta.style.top = '10px'
    resposta.style.fontFamily = 'Impact'
    resposta.style.webkitTextStroke = '2px black'
    resposta.style.textShadow = '0px 2px 4px black'


}