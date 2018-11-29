const burger = document.querySelector('.burger');
const active = document.querySelectorAll('.active');

burger.addEventListener('click', function () {
    active.forEach(element => {
        element.classList.toggle('show');
    })
})