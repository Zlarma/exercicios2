let resposta = document.getElementById('resposta')
function div7(){
    let num = []
    
    num[1] = Number(document.getElementById(`num1`).value)
    num[2] = Number(document.getElementById(`num2`).value)
    num[3] = Number(document.getElementById(`num3`).value)
    num[4] = Number(document.getElementById(`num4`).value)
    num[5] = Number(document.getElementById(`num5`).value)

    let div7 = 0

    for(let i=0;i<num.length;i++) {
        if(num[i] % 7 == 0){
            div7 += 1
        }
    }

    resposta.innerHTML = "Quantidade: "+div7
    resposta.style.color = 'white'
    resposta.style.fontSize = '30px'
    resposta.style.position = 'relative'
    resposta.style.fontFamily = 'Impact'
    resposta.style.webkitTextStroke = '2px black'
    resposta.style.textShadow = '0px 2px 4px black' 
}