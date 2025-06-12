const todoInput = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");
const completedList = document.getElementById("completedList");
const clearCompletedBtn = document.getElementById("clearCompleted");

let todos = JSON.parse(localStorage.getItem("todos")) || [];
let completed = JSON.parse(localStorage.getItem("completed")) || [];

addBtn.addEventListener("click", addTodo);
todoInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") addTodo();
});

clearCompletedBtn.addEventListener("click", () => {
    completed = [];
    updateLocalStorage();
    renderCompleted();
});

function addTodo() {
    const value = todoInput.value.trim();
    if (value === "") return;
    todos.push({ text: value });
    updateLocalStorage();
    renderTodos();
    todoInput.value = "";
}

function renderTodos() {
    todoList.innerHTML = "";
    todos.forEach((todo, index) => {
        const item = document.createElement("div");
        item.className = "todo-item";

        const textEl = document.createElement("span");
        textEl.textContent = todo.text;

        const buttons = document.createElement("div");
        buttons.className = "todo-buttons";

        const editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.className = "edit";
        editBtn.onclick = () => editTodo(index, textEl, editBtn);

        const delBtn = document.createElement("button");
        delBtn.textContent = "Delete";
        delBtn.className = "delete";
        delBtn.onclick = () => {
            todos.splice(index, 1);
            updateLocalStorage();
            renderTodos();
        };

        const completeBtn = document.createElement("button");
        completeBtn.textContent = "Complete";
        completeBtn.className = "complete";
        completeBtn.onclick = () => {
            completed.push(todos[index]);
            todos.splice(index, 1);
            updateLocalStorage();
            renderTodos();
            renderCompleted();
        };

        buttons.appendChild(editBtn);
        buttons.appendChild(completeBtn);
        buttons.appendChild(delBtn);

        item.appendChild(textEl);
        item.appendChild(buttons);
        todoList.appendChild(item);
    });
}

function renderCompleted() {
    completedList.innerHTML = "";
    completed.forEach((todo, index) => {
        const item = document.createElement("div");
        item.className = "todo-item";

        const textEl = document.createElement("span");
        textEl.textContent = todo.text;

        const delBtn = document.createElement("button");
        delBtn.textContent = "Delete";
        delBtn.className = "delete";
        delBtn.onclick = () => {
            completed.splice(index, 1);
            updateLocalStorage();
            renderCompleted();
        };

        item.appendChild(textEl);
        item.appendChild(delBtn);
        completedList.appendChild(item);
    });
}

function editTodo(index, textElement, editBtn) {
    const parent = editBtn.closest(".todo-item");
    if (editBtn.textContent === "Edit") {
        const input = document.createElement("input");
        input.type = "text";
        input.value = textElement.textContent;
        input.style.width = "60%";
        parent.replaceChild(input, textElement);
        editBtn.textContent = "Save";

        input.addEventListener("keypress", (e) => {
            if (e.key === "Enter") editBtn.click();
        });
    } else {
        const input = parent.querySelector("input");
        todos[index].text = input.value;
        updateLocalStorage();
        renderTodos();
    }
}

function updateLocalStorage() {
    localStorage.setItem("todos", JSON.stringify(todos));
    localStorage.setItem("completed", JSON.stringify(completed));
}

renderTodos();
renderCompleted();