const spnText = document.querySelector('.text');
const txt = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ea atque rem, nostrum ad excepturi vero iure similique assumenda repudiandae voluptas corrupti repellat reiciendis, fugit amet fugiat illum velit a?'
const spnCursor = document.querySelector('.cursor');
let indexText = 0;
const addLetter = () => {
    spnText.textContent += txt[indexText]
    indexText++;
    if (indexText === txt.length) {
        clearInterval(indexTyping);
    }
}
const cursorAnimation = () => {
    spnCursor.classList.toggle('active');
}

const indexTyping = setInterval(addLetter, 50);
setInterval(cursorAnimation, 400);