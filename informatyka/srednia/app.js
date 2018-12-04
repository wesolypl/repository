const btn1 = document.createElement('button');
btn1.textContent = 'Dodaj liczbę';
document.body.appendChild(btn1);
const btn2 = document.createElement('button');
btn2.textContent = 'Oblicz średnią';
document.body.appendChild(btn2);
const clearBtn = document.createElement('button');
clearBtn.textContent = 'Usuń liczby';
document.body.appendChild(clearBtn);
const p = document.createElement('p');
const numbers = [];
const addNumber = () => {
    const number = document.querySelector('input').value;
    numbers.push(number);
    console.log(numbers);
}

const calc = () => {
    let sum = 0;
    numbers.forEach(number => {
        sum += parseInt(number);
    });
    return sum / numbers.length;
}
btn1.addEventListener('click', () => {
    addNumber();
    document.querySelector('input').value = '';
    p.textContent = numbers;
    document.body.append(p);
})
btn2.addEventListener('click', () => {
    const avg = calc();
    p.textContent = `Średnia z podanych liczb to: ${avg}`;
    document.body.appendChild(p);
})
clearBtn.addEventListener('click', () => {
    numbers.splice(0, numbers.length);
    p.textContent = '';
})