const advices = ['walcz', 'przemyśl'];
const input = document.querySelector('input');
const h1 = document.querySelector('h1');


const addAdvice = (e) => {
    e.preventDefault();
    const advice = input.value;
    let ok = true;
    if (advice.length) {
        advices.forEach(element => {
            if (advice === element) {
                ok = !ok;
            }
        });
        if (ok) {
            advices.push(advice);
            console.log(advice);
            input.value = '';
            return;
        }
    }
}



document.querySelector('.add').addEventListener('click', addAdvice);



document.querySelector('.clean').addEventListener('click', (e) => {
    e.preventDefault();
    advices.splice(0, advices.length)
});



document.querySelector('.showAdvice').addEventListener('click', (e) => {
    e.preventDefault();
    h1.textContent = advices[Math.floor(Math.random() * advices.length)];
});



document.querySelector('.showOptions').addEventListener('click', (e) => {
    e.preventDefault();
    alert(advices.join(' --- --- '))
});