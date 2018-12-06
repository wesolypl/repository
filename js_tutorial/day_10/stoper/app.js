const startBtn = document.querySelector('.start');
const resetBtn = document.querySelector('.reset');

const startStoper = () => {
    const btnText = startBtn.textContent;
    const timeStart = new Date().getTime();
    let intervalIndex = setInterval(start, 10);
    if (btnText === "Start") {
        startBtn.textContent = "Stop";
        intervalIndex = setInterval(start, 10);
    } else {
        startBtn.textContent = "Start";
        clearInterval(intervalIndex);
    }

    function start() {
        const timeNow = new Date().getTime();
        const time = timeNow - timeStart;
        console.log(time)
    }

}
const resetStoper = () => {

}


startBtn.addEventListener('click', startStoper);
resetBtn.addEventListener('click', resetStoper);