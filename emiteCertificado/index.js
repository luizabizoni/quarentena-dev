function gerar(){

    emite = 1
    while(emite <= 1000000){
      html_certificado = emitirCertificado(inputNome.value)
      emite += 1
    }

    nomeAulas = [
      "Emitindo um certificado",
      "Calculadora de preço da corrida",
      "Botão de likes do Twitter",
      "Sorteio de corrida grátis",
      "Mulher Maravilha - PixelArt"
    ]

    listaLinks = [
      "https://github.com/luizabizoni/quarentenaDev/tree/master/emiteCertificado",
      "https://github.com/luizabizoni/quarentenaDev/tree/master/calculadoraPreco",
      "https://github.com/luizabizoni/quarentenaDev/tree/master/botaoLikes",
      "https://github.com/luizabizoni/quarentenaDev/tree/master/sorteioCorrida",
      "https://github.com/luizabizoni/quarentenaDev/tree/master/pixelart"
    ]

    contador = 0
    linksExercicios = ""
    while(contador < listaLinks.length){
      links = listaLinks[contador]
      aulas = nomeAulas[contador]
      linksExercicios = `<li>${aulas}</br>${links}</li>`+linksExercicios
    contador += 1
    }
    
    document.body.innerHTML =
      `${html_certificado}
      <ol>
        ${linksExercicios}
      </ol>
  `
    //print();
}