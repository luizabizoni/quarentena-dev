function formataMoeda(numero){
    return numero.toFixed(2).replace(".", ",")
}

function calcular(){
    distancia = inputDistancia.value
    //Para velocidade média = 50km/h:
    minutos = (distancia*6)/5
    
    taxaFixa = 2
    taxaPorKm = 1.40
    taxaPorMinuto = 0.26
    
    valorFinal = (taxaFixa + distancia * taxaPorKm + minutos * taxaPorMinuto)
    
    botaoCalcular.innerHTML = 'Valor da corrida: R$'+ formataMoeda(valorFinal)
}