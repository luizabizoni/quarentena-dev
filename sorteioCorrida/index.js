function sorteia() {
    numeroSorteado = Math.round(Math.random()*10)
    console.log(numeroSorteado)

    numeroEscolhido = prompt("Digite um número de 1 a 10")
    
    while (numeroEscolhido < 1 || numeroEscolhido > 10) {
        numeroEscolhido = prompt('Número inválido. Digite um número de 1 a 10')    
    }

    if (numeroEscolhido == numeroSorteado) {
        paragrafoResultado.innerHTML = "Parabéns, você ganhou uma corrida grátis!"  
    } else {
        paragrafoResultado.innerHTML = "Não foi dessa vez. :("   
    }   
}