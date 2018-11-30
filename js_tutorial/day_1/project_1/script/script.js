let i = 1;
const addElement = () => {
    const div = document.createElement('div');
    div.textContent = i;
    if (i % 5) {
        div.classList.add('sqr');

    } else {
        div.classList.add('circle');
    }
    document.querySelector('section').appendChild(div);
    i++;
}
document.querySelector('button').addEventListener('click', addElement)