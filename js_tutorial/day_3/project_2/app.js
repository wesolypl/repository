let size = 10;
let orderElement = 1;

const init = () => {
    const btn1 = document.createElement('button');
    btn1.textContent = 'Dodaj 10 elementów';
    document.body.appendChild(btn1);
    const btn2 = document.createElement('button');
    btn2.textContent = 'Usuń listę';
    document.body.appendChild(btn2);
    const ul = document.createElement('ul');
    document.body.appendChild(ul);
    btn1.addEventListener('click', createElements);
    btn2.addEventListener('click', removeElements);

}
const createElements = () => {
    for (let i = 0; i < 10; i++) {
        const liItem = document.createElement('li');
        liItem.textContent = `Element ${orderElement}`;
        document.querySelector('ul').appendChild(liItem);
        liItem.style.fontSize = `${size}px`;
        orderElement++;
        size++;
    }
}
const removeElements = () => {
    document.querySelector('ul').textContent = "";
}
init();