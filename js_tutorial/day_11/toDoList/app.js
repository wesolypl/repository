const inputTask = document.querySelector('.task');
const taskUl = document.querySelector('ul');
let listOfTask = []
let taskDeleteBtn = [];
//Dodawanie nowego zadania
const addTask = () => {
    const newTaskText = inputTask.value;
    if (newTaskText === '') return;
    //Utworzenie elementu i dodanie do list
    const newTaskLi = document.createElement('li');
    newTaskLi.innerHTML = `${newTaskText}<button class="remove">Usuń</button>`
    listOfTask.push(newTaskLi);

    taskUl.appendChild(newTaskLi)
    //Usunięcie watośći inputa
    inputTask.value = '';
    //Wywołanie funkcji aktualizującej obecne elementy listy
    refresh()
    document.querySelectorAll('.remove').forEach(button => {
        button.addEventListener('click', deleteTask)
    })
}
//Aktualizowanie elementów w tablicach
const refresh = () => {
    taskUl.textContent = '';
    listOfTask.forEach((task, key) => {
        task.dataset.key = key;
        taskUl.appendChild(task);
    })
}
//Usuwanie elementu listy zadań
const deleteTask = (e) => {
    const key = e.target.parentNode.dataset.key;
    listOfTask.splice(key, 1);
    console.log(listOfTask)
    refresh();
}
//Wyszukiwarka
const search = (e) => {
    taskUl.textContent = '';
    const searchingTask = e.target.value.toLowerCase();
    let tasks = [...listOfTask];
    tasks = tasks.filter(task => task.textContent.toLowerCase().includes(searchingTask));
    tasks.forEach(task => {
        taskUl.appendChild(task);
    })

}





document.querySelector('.add').addEventListener('click', addTask);
document.querySelector('.search').addEventListener('input', search);