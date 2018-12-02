const div = document.querySelector('div');
let divX = 150;
let divY = 150;
let drawActive = false;
let insertDivX;
let insertDivY;
div.addEventListener('mousedown', (e) => {
    div.style.backgroundColor = `#ccc`;
    drawActive = true;
    insertDivX = e.offsetX;
    insertDivY = e.offsetY;
})
div.addEventListener('mousemove', (e) => {
    if (drawActive) {
        divX = e.clientX - insertDivX;
        divY = e.clientY - insertDivY;
        div.style.top = `${divY}px`;
        div.style.left = `${divX}px`;
    }
})
div.addEventListener('mouseup', () => {
    div.style.backgroundColor = `#000`;
    drawActive = false;
})
div.addEventListener('mouseout', () => {
    div.style.backgroundColor = `#000`;
    drawActive = false;
})