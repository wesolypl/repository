const spnText = document.querySelector('.text');
const txt = ['Dzień dobry', 'Witaj', 'Siema']
const spnCursor = document.querySelector('.cursor');
let indexText = -15;
let number = 0
const addLetter = () => {
    if (indexText >= 0) {
        spnText.textContent += txt[number][indexText];
    }
    indexText++;

    if (indexText === txt[number].length) {
        number++;

        if (number === txt.length) return;

        return setTimeout(() => {
            indexText = -15;
            spnText.textContent = '';
            addLetter();
        }, 2000)
    }

    setTimeout(addLetter, 50);
}
addLetter();

const cursorAnimation = () => {
    spnCursor.classList.toggle('active');
}

setInterval(cursorAnimation, 400);