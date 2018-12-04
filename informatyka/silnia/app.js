const btn = document.createElement('button');
btn.textContent = 'Oblicz silnie'
document.body.appendChild(btn);
const p = document.createElement('p');

const calcSilnia = () => {
    const silniaOf = document.querySelector('input').value;
    let result = 1;
    for (let i = 1; i <= silniaOf; i++) {
        result *= i;
    }
    return result;
}


btn.addEventListener('click', () => {
    p.textContent = '';
    const silnia = calcSilnia();
    p.textContent = silnia;
    document.body.appendChild(p);
})