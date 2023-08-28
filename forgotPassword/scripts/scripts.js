const labels = document.querySelectorAll('label');
const inputLogin = document.querySelectorAll('input');

document.getElementById("emailUser").focus();

inputLogin.forEach((input, index) => {
    input.addEventListener('focus', () => {
        labels[index].style.top = '-10px';
        labels[index].style.fontSize = '11px';
        labels[index].style.marginTop = '12px';
    });

    input.addEventListener('blur', () => {
        if (input.value === '') {
            labels[index].style.top = '2px';
            labels[index].style.fontSize = '14px';
            labels[index].style.marginTop = '15px';
        }
    });
});