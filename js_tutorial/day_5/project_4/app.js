const passwords = ['jedEN', 'dWa'];
const messages = ['sUPer', 'dZiAła'];
const input = document.querySelector('#pass');
const div = document.querySelector('.message');
const showMessage = (e) => {
    div.textContent = '';
    const text = e.target.value;
    passwords.forEach((password, index) => {
        if (text.toLowerCase() === password.toLowerCase()) {
            div.textContent = messages[index].toUpperCase();
        }
    });
}

input.addEventListener('input', showMessage);