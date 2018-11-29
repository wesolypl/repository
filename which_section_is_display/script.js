function changeText() {
    const heightScroll = window.scrollY;
    const heightS1 = document.querySelector('.s1').clientHeight;
    const heightS2 = document.querySelector('.s2').clientHeight;
    const heightS3 = document.querySelector('.s3').clientHeight;
    const heightS4 = document.querySelector('.s4').clientHeight;
    const ofTopS1 = document.querySelector('.s1').offsetTop;
    const ofTopS2 = document.querySelector('.s2').offsetTop;
    const ofTopS3 = document.querySelector('.s3').offsetTop;
    const ofTopS4 = document.querySelector('.s4').offsetTop;
    const txt = document.querySelector('div.info');
    if (heightScroll < heightS1) {
        txt.textContent = "section 1"
    }
    else if (heightScroll < heightS2 + ofTopS2) {
        txt.textContent = "section 2"
    }
    else if (heightScroll < heightS3 + ofTopS3) {
        txt.textContent = "section 3"
    }
    else {
        txt.textContent = "section 4"
    }
}

window.addEventListener('scroll', changeText);