document.body.style.height = '1000vh';
const div = document.createElement('div');
div.style.width = '100%';
div.style.position = 'fixed';
div.style.backgroundColor = 'green';
div.style.top = '0';
div.style.left = '0';
document.body.appendChild(div);
let height = 0;
let grow = true;
const changeHeight = () => {
    if (height >= window.innerHeight / 2) {
        div.style.backgroundColor = 'red';
        grow = !grow;
    } else if (height < 0) {
        div.style.backgroundColor = 'green';
        grow = !grow;
    }
    if (grow) {
        div.style.height = `${height}px`;
        height += 10;
    } else {
        div.style.height = `${height}px`;
        height -= 10;
    }
}
window.addEventListener('scroll', changeHeight);