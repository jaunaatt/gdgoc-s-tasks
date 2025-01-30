document.addEventListener('DOMContentLoaded', () => {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    todoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        addTodo();
    });

    function addTodo() {
        if (todoInput.value.trim() === '') return;

        const li = document.createElement('li');
        li.innerHTML = `
            <span>${todoInput.value}</span>
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
        `;

        todoList.appendChild(li);
        todoInput.value = '';

        const editBtn = li.querySelector('.edit-btn');
        const deleteBtn = li.querySelector('.delete-btn');

        editBtn.addEventListener('click', () => editTodo(li));
        deleteBtn.addEventListener('click', () => deleteTodo(li));
    }

    function editTodo(li) {
        const span = li.querySelector('span');
        const newText = prompt('Edit your task:', span.textContent);
        if (newText !== null && newText.trim() !== '') {
            span.textContent = newText;
        }
    }

    function deleteTodo(li) {
        if (confirm('Are you sure you want to delete this task?')) {
            li.remove();
        }
    }
});