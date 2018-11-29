const colorImages = ['img/s1.png', 'img/s2.png', 'img/s3.png'];
const greyImages = ['img/s1a.png', 'img/s2a.png', 'img/s3a.png'];
const personName = ['anna kowalska', 'janusz nowak', 'piotr woźniak'];
const personJob = ['proramistka js', 'frond-end developer', 'ui|ux designer'];

const activeColorImg = document.querySelector('.color');
const activeGreyImg = document.querySelector('.grey');
const activeH1 = document.querySelector('.member h1');
const activeH2 = document.querySelector('.member h2');
let i = 0
function changeSlide() {
    i++;
    if (i == colorImages.length) {
        i = 0;
    }
    activeColorImg.src = colorImages[i];
    activeGreyImg.src = greyImages[i];
    activeH1.innerHTML = personName[i];
    activeH2.innerHTML = personJob[i];
}
setInterval(changeSlide, 4000);
