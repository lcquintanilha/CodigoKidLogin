const inputLogin = document.querySelectorAll('.input1');
const labels = document.querySelectorAll('label');

// Movimento dos labels

inputLogin.forEach((input, index) => {
    input.addEventListener('focus', () => {
        labels[index].style.top = '-20px';
        labels[index].style.fontSize = '12px';
        labels[index].style.marginTop = '12px';
    });

    input.addEventListener('blur', () => {
        if (input.value === '') {
            labels[index].style.top = '2px';
            labels[index].style.fontSize = '15px';
            labels[index].style.marginTop = '10px';
        }
    });
});
