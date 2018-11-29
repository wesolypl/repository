// const burger = document.querySelector('.burger');
// const iconBurger = document.querySelector('.fa-bars');
// const iconX = document.querySelector('.fa-times');
// const menu = document.querySelector('aside');
// const wrapper = document.querySelector('.wrapper');

// burger.addEventListener('click', function () {
//     iconBurger.classList.toggle('show');
//     iconX.classList.toggle('show');
//     menu.classList.toggle('show');
//     wrapper.classList.toggle('show');
// })

const burger = document.querySelector('.burger');
const active = document.querySelectorAll('.active');
burger.addEventListener('click', function () {
    active.forEach(element => {
        element.classList.toggle('show');
    });
})