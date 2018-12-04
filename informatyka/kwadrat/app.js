const btn = document.createElement('button');
btn.textContent = 'Rysuj prostokąt';
document.querySelector('form').appendChild(btn);
const square = document.createElement('div');
square.style.backgroundColor = 'black';
btn.addEventListener('click', (e) => {
    e.preventDefault();
    square.style.width = parseInt(document.querySelector('.width').value) + 'px';
    square.style.height = parseInt(document.querySelector('.height').value) + 'px';
    document.body.appendChild(square);
})