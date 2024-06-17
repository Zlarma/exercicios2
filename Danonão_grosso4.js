let resposta = document.getElementById('resposta')

function analiseFunction(){
    let nome = document.getElementById('nome').value
    let age = Number(document.getElementById('age').value)
    console.log(age)
    
    if(age < 16){
        resposta.innerHTML = nome + ' não é permitido votar, pois sua idade é de ' + age + ' anos'
        resposta.style.fontSize = '30px'
    resposta.style.color = 'white'
    resposta.style.position = 'relative'
    resposta.style.fontFamily = 'Impact'
    resposta.style.webkitTextStroke = '2px black'
    resposta.style.textShadow = '0px 2px 4px black'
        }else{
            resposta.innerHTML = nome + ' é permitido votar, pois sua idade é de ' + age + ' anos'
            resposta.style.fontSize = '30px'
    resposta.style.color = 'white'
    resposta.style.position = 'relative'
    resposta.style.fontFamily = 'Impact'
    resposta.style.webkitTextStroke = '2px black'
    resposta.style.textShadow = '0px 2px 4px black'
            
    }
    
}