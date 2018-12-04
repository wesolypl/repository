const coinSide = ['orzel', 'reszka'];
const btn = document.createElement('button');
btn.textContent = 'Rzuć monetą'
document.body.appendChild(btn);
const h1 = document.createElement('h1');
btn.addEventListener('click', () => {
    h1.textContent = '';

    const side = Math.floor(Math.random() * 2);
    h1.textContent = coinSide[side];
    document.body.appendChild(h1);
})