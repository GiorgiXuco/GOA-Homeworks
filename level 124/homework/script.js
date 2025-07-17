let todos = [];

function getTodos(limit) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos');
    xhr.onload = function () {
        if (xhr.status === 200) {
            todos = JSON.parse(xhr.responseText).slice(0, limit);
            renderTodos(todos);
        } else {
            alert('ვერ მოვახერხე დატვირთვა');
        }
    };
    xhr.send();
}

function filterCompleted(isCompleted) {
    const filtered = todos.filter(todo => todo.completed === isCompleted);
    renderTodos(filtered);
}

function getTodoById() {
    const id = document.getElementById('taskId').value;
    if (!id) {
        alert('შეიყვანე ID');
        return;
    }

    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/' + id);
    xhr.onload = function () {
        if (xhr.status === 200) {
            const todo = JSON.parse(xhr.responseText);
            renderTodos([todo]);
        } else {
            alert('Task ვერ მოიძებნა');
        }
    };
    xhr.send();
}

function renderTodos(todos) {
    const list = document.getElementById('todoList');
    list.innerHTML = '';
    todos.forEach(todo => {
        const li = document.createElement('li');
        li.textContent = `#${todo.id} - ${todo.title} [${todo.completed ? '✅' : '❌'}]`;
        li.className = todo.completed ? 'completed' : 'incomplete';
        list.appendChild(li);
    });
}