document.body.addEventListener('click', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    if (x % 2 === 0 && y % 2 === 0) {
        document.body.style.backgroundColor = 'red';
    } else if (x % 2 !== 0 && y % 2 !== 0) {
        document.body.style.backgroundColor = 'blue';
    } else if ((x % 2 === 0 && y % 2 !== 0) || (x % 2 !== 0 && y % 2 === 0)) {
        document.body.style.backgroundColor = 'green';
    }
})