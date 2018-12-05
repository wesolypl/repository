const btn = document.querySelector('button');
const p = document.createElement('p');
const randomNumber = (e) => {
    e.preventDefault();
    p.textContent = '';
    const min = parseInt(document.querySelector('.min').value);
    const max = parseInt(document.querySelector('.max').value);
    const number = Math.floor(Math.random() * (max - min + 1) + min);
    p.textContent = number;
    document.body.appendChild(p);
}


btn.addEventListener('click', randomNumber);