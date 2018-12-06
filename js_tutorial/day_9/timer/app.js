const timer = () => {
    let sec = 0;
    document.body.textContent = `${sec} sekund`;
    const spendTime = () => {
        sec++;
        document.body.textContent = `${sec} sekund`;
    }
    return spendTime;
}
const time = timer();
setInterval(time, 1000);