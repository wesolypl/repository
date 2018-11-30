let size = 1;
let grow = true;
const resizeDiv = () => {
    const div = document.querySelector('div');
    if (size >= 50) {
        grow = !grow;
    } else if (size <= 0) {
        grow = !grow;
    }
    if (grow) {
        size++;
        div.style.width = `${size}vh`;
        div.style.height = `${size}vh`;
    } else {
        size--;
        div.style.width = `${size}vh`;
        div.style.height = `${size}vh`;
    }
}
window.addEventListener('scroll', resizeDiv);