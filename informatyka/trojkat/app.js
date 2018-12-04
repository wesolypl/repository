const btn = document.createElement('button');
btn.textContent = 'Rysuj trójkąt';
document.body.appendChild(btn);
const triangle = document.createElement('div');
triangle.style.width = 0;
triangle.style.height = 0;
btn.addEventListener('click', () => {
    const height = parseInt(document.querySelector('input').value);
    const line = (Math.sqrt(3) / 2 * height)
    triangle.style.borderLeft = `${line}px solid transparent`;
    triangle.style.borderRight = `${line}px solid transparent`;
    triangle.style.borderBottom = `${line}px solid blue`;
    document.body.appendChild(triangle);
})