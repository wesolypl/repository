const clock = () => {
    const date = new Date();
    const hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();;
    const minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    const seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();

    document.querySelector('.clock span').textContent = `${hours}:${minutes}:${seconds}`;


}
setInterval(clock, 1000);