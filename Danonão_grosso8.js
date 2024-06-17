let resposta = document.getElementById('resposta')

function div35() {
    let num = []
    
    num[1] = Number(document.getElementById(`num1`).value)
    num[2] = Number(document.getElementById(`num2`).value)
    num[3] = Number(document.getElementById(`num3`).value)
    num[4] = Number(document.getElementById(`num4`).value)
    num[5] = Number(document.getElementById(`num5`).value)

    let div3 = 0
    let div5 = 0
    let div35 = 0

    for(let i=0;i<num.length;i++) {
        if((num[i] % 3 == 0)&&(num[i] % 5 == 0)){
            div35 += 1
        }
        if(num[i] % 3 == 0){
            div3 += 1
        }
        if(num[i] % 5 == 0){
            div5 += 1
        }
    }
    resposta.innerHTML = "Os números divisiveis por 3 são  "+div3+"<br>"
    resposta.innerHTML += "Os números divisiveis por 5 são  "+div5+"<br>"
    resposta.innerHTML += "Os números divisiveis por 3 e 5 são  "+div35
    resposta.style.color = 'white'
    resposta.style.fontSize = '30px'
    resposta.style.position = 'relative'
    resposta.style.fontFamily = 'Impact'
    resposta.style.webkitTextStroke = '2px black'
    resposta.style.textShadow = '0px 2px 4px black' 
} 