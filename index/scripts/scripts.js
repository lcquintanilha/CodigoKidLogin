const inputLogin = document.querySelectorAll('.inputLogin');
const labels = document.querySelectorAll('label');
const usuarios = [
    {
      username: 'usuario1',
      password: 'senha1'
    },
    {
      username: 'usuario2',
      password: 'senha2'
    },
    {
      username: 'usuario3',
      password: 'senha3'
    }
  ];

const storedUsuarios = JSON.parse(localStorage.getItem('usuarios'));

// Movimento dos labels

inputLogin.forEach((input, index) => {
    input.addEventListener('focus', () => {
        labels[index].style.top = '-10px';
        labels[index].style.fontSize = '12px';
        labels[index].style.marginTop = '12px';
    });

    input.addEventListener('blur', () => {
        if (input.value === '') {
            labels[index].style.top = '2px';
            labels[index].style.fontSize = '15px';
            labels[index].style.marginTop = '35px';
        }
    });
});

// Setando usuários no local storage

localStorage.setItem('usuarios', JSON.stringify(usuarios));

// Gerar token

function enter(){
    let user = document.querySelector('#username')
    let userLabel = document.querySelector('#userLabel')

    let password = document.querySelector('#password')
    let passwordLabel = document.querySelector('#passwordLabel')

    let msgError = document.querySelector('#msgError')
    let userList = []

    let userValid = {
        username: "",
        password: ""
    }

    listaUser = JSON.parse(localStorage.getItem("usuarios"))

    listaUser.forEach((item) =>{
        if(user.value == item.username && password.value == item.password){
            userValid = {
                username: item.username,
                password: item.password
            }
        }
    })

    if(user.value != "" && user.value == userValid.username && password.value == userValid.password) {
        window.location.href = 'file:///C:/Curso%20JS/projetoCK2/home.html'

        let token = Math.random().toString(16).substr(2)
        localStorage.setItem('token', token)

    } else {
        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = 'Usuário ou senha incorretos'
        user.focus()
    }
}

document.body.addEventListener('keypress', function(e) {
    if (e.keyCode === 13) {
        e.preventDefault();
        document.getElementById("btnLogin").click();
    }
});