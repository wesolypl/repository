const btn = document.querySelector('button');
const section = document.querySelector('section');
const chars = 'ABCDEFGIJK0123456789';
const codesNumber = 1000;
const charsNumber = 10;

const codesGenerator = () => {
    section.textContent = '';
    let i = 0;
    while (i < codesNumber) {
        let code = '';
        for (let j = 0; j < charsNumber; j++) {
            code += chars[Math.floor(Math.random() * chars.length)];
        }
        const div = document.createElement('div');
        div.textContent = `${i+1}. ${code}`;
        section.appendChild(div);
        i++;
    }
}
btn.addEventListener('click', codesGenerator);