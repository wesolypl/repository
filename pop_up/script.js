const btn = document.querySelector('button');
const modal = document.querySelector('.modal-wrap');
const article = document.querySelector('.article');
const x = document.querySelector('.hide');

function popUp() {
    modal.classList.toggle('active');
    article.classList.toggle('blur');
}

btn.addEventListener('click', popUp);
x.addEventListener('click', popUp);