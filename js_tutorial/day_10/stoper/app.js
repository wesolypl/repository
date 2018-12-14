const startBtn = document.querySelector('.start');
const resetBtn = document.querySelector('.reset');
const h1 = document.querySelector('h1');
let indexInterval;

let time = 0;


const timer = () => {
    if (startBtn.textContent === 'Start') {
        startBtn.textContent = 'Stop';
        indexInterval = setInterval(current, 10);
    } else {
        startBtn.textContent = 'Start';
        clearInterval(indexInterval);
    }

}

const current = () => {
    time++;
    h1.textContent = (time / 100).toFixed(2);
}


const reset = () => {
    startBtn.textContent = 'Start';
    h1.textContent = '---'
    time = 0;
    clearInterval(indexInterval);
}

startBtn.addEventListener('click', timer);
resetBtn.addEventListener('click', reset);