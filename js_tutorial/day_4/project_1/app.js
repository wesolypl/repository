const h1 = document.querySelector('h1');
document.body.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    const width = window.innerWidth;
    const height = window.innerHeight;
    const red = (x / width * 100).toFixed();
    const green = (y / height * 100).toFixed();
    const blue = ((red / green) / 2).toFixed();
    h1.textContent = `${x}, ${y}`;
    document.body.style.backgroundColor = `rgb(${red}%,${green}%,${blue}%)`;
})