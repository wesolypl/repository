let fontSize = 10;
document.querySelector('button').addEventListener('click', () => {
    const lis = document.querySelectorAll('li');
    lis.forEach(li => {
        li.style.display = 'block';
        li.style.fontSize = `${fontSize}px`;
    });
    fontSize++;
})