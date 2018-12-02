const names = ['ania', 'jagienka', 'dobrawa', 'asia', 'daria', 'marysia'];
const prefixs = ['wydaje mi się', 'mam wrażenie', 'szczerze powiedziawszy, myślę', 'szczerze uważam', 'na 100% twierdzę', 'jestem pewien']
const btn = document.querySelector('button');
const div = document.querySelector('div');

const nameGenerator = () => {
    div.textContent = `${prefixs[Math.floor(Math.random()*prefixs.length)]}, że najlepsze będzie  ${(names[Math.floor(Math.random() * names.length)])}`;
}


btn.addEventListener('click', nameGenerator);