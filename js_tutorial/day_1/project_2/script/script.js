let i = 1;
const addElement = () => {
    const li = document.createElement('li');
    li.textContent = i;
    if (i % 3 == 0) {
        li.classList.add('big');
    }
    document.querySelector('section ul').appendChild(li);
    i += 2;
}
document.querySelector('button').addEventListener('click', addElement)