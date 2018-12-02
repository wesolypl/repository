const input = document.querySelector('#pass');
const div = document.querySelector('.message');
const passwords = ['user', 'wiosna'];
const messages = ['halo halo', 'pora roku']

input.addEventListener('input', (e) => {
    div.textContent = '';
    const text = e.target.value;
    passwords.forEach((password, index) => {
        if (password === text) {
            div.textContent = messages[index];
        }
    })

})





input.addEventListener('focus', () => {
    input.classList.add('active');
})
input.addEventListener('blur', () => {
    input.classList.remove('active');
})