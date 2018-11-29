const arrow = document.querySelector('.arrow');
const active = document.querySelectorAll('.active');

arrow.addEventListener('click', function () {
    active.forEach(element => {
        element.classList.toggle('show');
    })
    arrow.classList.toggle('click');
})