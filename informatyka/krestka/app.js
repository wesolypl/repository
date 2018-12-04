const btn = document.createElement('button');
btn.textContent = 'Rysuj linie';
document.body.appendChild(btn);
const minus = document.createElement('p');
btn.addEventListener('click', () => {
    const howLong = parseInt(document.querySelector('input').value);
    minus.textContent = '';
    for (let i = 0; i < howLong; i++) {
        minus.textContent += '-';
    }

    document.body.appendChild(minus);
})