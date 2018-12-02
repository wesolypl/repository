const input = document.querySelector('input');
const btn = document.querySelector('button');
const div = document.querySelector('div');

const names = [''];

const addName = (e) => {
    e.preventDefault();
    const newName = input.value;
    let ok = true;
    if (newName.length) {
        names.forEach(name => {
            if (newName === name) {
                alert('dodano wcześniej');
                ok = !ok;
            }
        });
        if (ok) {
            names.push(newName);
            div.textContent += newName + ', ';
        }
        input.value = '';
    }
}

btn.addEventListener('click', addName);