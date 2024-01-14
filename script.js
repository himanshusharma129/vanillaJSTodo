let addButton = document.getElementById('add-button');
let inputTask = document.getElementById('todo-input');
let todoList = document.getElementById('todo-list');

addButton.addEventListener('click', function() {
    if (inputTask.value === '') {
        return;
    }

    let newTask = document.createElement('li');

    let checkButton = document.createElement('button');
    checkButton.type = 'button';
    newTask.innerText = inputTask.value;

    todoList.appendChild(newTask);
    inputTask.value = '';

    newTask.addEventListener('click', function() {
        if (newTask.classList.contains('checked')) {
            newTask.classList.remove('checked');
            return;
        }

        newTask.classList = ['checked'];
    });

    newTask.addEventListener('dblclick', function() {
        todoList.removeChild(newTask);
    });
});

