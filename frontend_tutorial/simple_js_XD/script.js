//font up and font down

const btnBigger = document.querySelector('.bigger');
const btnSmaller = document.querySelector('.smaller');
const text = document.querySelector('p');

btnBigger.addEventListener('click', function () {
    text.style.fontSize = '22px';
})
btnSmaller.addEventListener('click', function () {
    text.style.fontSize = '12px';
})

//Change bgc to white/red

const box1 = document.querySelector('.box1');
const box2 = document.querySelector('.box2');

function toggleRed() {
    box1.classList.toggle('red');
    box2.classList.toggle('red');
}
box1.addEventListener('click', toggleRed)
box2.addEventListener('click', toggleRed)

//Rotate square

const sqrt = document.querySelector('.sqrt');
let deg = 10;

sqrt.addEventListener('click', function () {
    sqrt.style.transform = 'rotate(' + deg + 'deg)';
    sqrt.style.transition = '.5s'
    deg = deg + 10;
})

//Create div on click

const btn1 = document.querySelector('.btn1');

btn1.addEventListener('click', function () {
    const div = document.createElement('div');
    div.classList.add('box');
    document.body.appendChild(div);
});