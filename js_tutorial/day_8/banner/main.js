const slideList = [{
        img: "images/img1.jpg",
        text: 'Pierwszy tekst'
    },
    {
        img: "images/img2.jpg",
        text: 'Drugi tekst'
    },
    {
        img: "images/img3.jpg",
        text: 'Trzeci tekst'
    }
];

const img = document.querySelector('img.slider');
const h1 = document.querySelector('h1.slider');
let active = 0;
const changeSlide = () => {
    active++;
    if (active === slideList.length) active = 0;
    console.log(active);
    img.src = slideList[active].img;
    h1.textContent = slideList[active].text;
    changeDot();
}

const dots = [...document.querySelectorAll('.dots span')];

const changeDot = () => {
    const activDot = dots.findIndex(dot => dot.classList.contains('active'));
    dots[activDot].classList.remove('active');
    dots[active].classList.add('active');
}

const keyChangeSlide = () => {
    switch (event.keyCode) {
        case 37:
            clearInterval(intervalIndex);
            active--;
            if (active < 0) {
                active = slideList.length - 1;
            }
            console.log(active);
            img.src = slideList[active].img;
            h1.textContent = slideList[active].text;
            break;
        case 39:
            clearInterval(intervalIndex);
            active++;
            if (active === slideList.length) {
                active = 0;
            }
            img.src = slideList[active].img;
            h1.textContent = slideList[active].text;
            console.log(active);
            break;
    }
    changeDot();
    intervalIndex = setInterval(changeSlide, 3000);
}


window.addEventListener('keydown', keyChangeSlide);
let intervalIndex = setInterval(changeSlide, 3000);