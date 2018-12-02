let red = 255;
let green = 255;
let blue = 255;

const changeColor1 = (e) => {
    if (e.keyCode === 38 && red < 255) {
        red++;
        green++;
        blue++;
    } else if (e.keyCode === 40 && red > 0) {
        red--;
        green--;
        blue--;
    }
    document.body.style.backgroundColor = `rgb(${red},${green},${blue})`;
}

const changeColor2 = (e) => {
    switch (e.keyCode) {
        case 38:
            if (red < 255) {
                document.body.style.backgroundColor = `rgb(${red++},${green++},${blue++})`;
            }
            break;
        case 40:
            if (red > 0) {
                document.body.style.backgroundColor = `rgb(${red--},${green--},${blue--})`;
            }
            break;

    }
}
window.addEventListener('keydown', changeColor2);