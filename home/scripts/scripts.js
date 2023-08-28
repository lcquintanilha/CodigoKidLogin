if(localStorage.getItem('token') == null){
    alert('Voce precisa estar logado para acessar essa página')
    window.location.href = 'file:///C:/Curso%20JS/projetoCK2/index.html'
}

function sair(){
    localStorage.removeItem('token')
    window.location.href = 'file:///C:/Curso%20JS/projetoCK2/index.html'
}