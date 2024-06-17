// alert('hello')
function carta(){
    alert('Psiu, um aviso. Quando tu gerar a resposta, o width dela é muito grande, e tampa o botão da conta 6. Eu não sei como que tira sem estraga o site todo, então porfavor, aperte F5 para recarregar a página e depois poder clicar na conta 6. É só isso, vip vap.')
    alert('Input2_text.here')
}

let resposta = document.getElementById('resposta')
function analiseFunction() {
    let num = []
    
    num[1] = Number(document.getElementById(`num1`).value)
    num[2] = Number(document.getElementById(`num2`).value)
    num[3] = Number(document.getElementById(`num3`).value)
    num[4] = Number(document.getElementById(`num4`).value)
    num[5] = Number(document.getElementById(`num5`).value)
    
    let maior = 0
    let menor = 0
    let contar = 0

    for(let j=0;j<num.length;j++){
        contar = 0
        for(let i=0;i<num.length;i++) {
            if(num[j] >= num[i]){
                contar += 1
            }
        }
        if(contar > 4) {
            maior = num[j]
        }else if(contar <= 1) {
            menor = num[j]
        }
    }

    console.log("| Maior número: ",maior)
    console.log("| Menor Número: ",menor)

    resposta.innerHTML = "Maior Número: "+maior+"<br>"+
                    "Menor Número: "+menor
                    resposta.style.color = 'white'
                    resposta.style.fontSize = '30px'
                    resposta.style.position = 'relative'
                    resposta.style.fontFamily = 'Impact'
                    resposta.style.webkitTextStroke = '2px black'
                    resposta.style.textShadow = '0px 2px 4px black'
                }   

