contaLikes = 1

function adicionarLike(){
    if (contaLikes != 1) {
        botao.innerHTML = contaLikes + " Likes"
    } else {
        botao.innerHTML = contaLikes + " Like"   
    }
    contaLikes = contaLikes + 1
}