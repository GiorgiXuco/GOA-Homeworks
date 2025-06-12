document.getElementById("addBtn").addEventListener("click", () => addTodo());
document.getElementById("todoInput").addEventListener("keypress", function (e) {
    if (e.key === "Enter") addTodo();
});

document.getElementById("clearCompleted").addEventListener("click", () => {
    document.getElementById("completedList").innerHTML = "";
    saveTodos();
});

function addTodo(text = null) {
    const input = document.getElementById("todoInput");
    const value = text || input.value.trim();
    if (value === "") return;

    createTodoElement(value, false);
    if (!text) saveTodos();

    input.value = "";
}

function createTodoElement(value, isCompleted) {
    const container = isCompleted ? document.getElementById("completedList") : document.getElementById("todoList");

    const item = document.createElement("div");
    item.className = "todo-item";

    const text = document.createElement("span");
    text.textContent = value;

    const buttons = document.createElement("div");
    buttons.className = "todo-buttons";

    if (!isCompleted) {
        const editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.classList.add("edit");
        editBtn.onclick = () => editTodo(text, editBtn);

        const completeBtn = document.createElement("button");
        completeBtn.textContent = "Complete";
        completeBtn.classList.add("complete");
        completeBtn.onclick = () => {
            item.remove();
            createTodoElement(text.textContent, true);
            saveTodos();
        };

        buttons.appendChild(editBtn);
        buttons.appendChild(completeBtn);
    }

    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.classList.add("delete");
    delBtn.onclick = () => {
        item.remove();
        saveTodos();
    };

    buttons.appendChild(delBtn);

    item.appendChild(text);
    item.appendChild(buttons);
    container.appendChild(item);
}

function editTodo(textElement, editBtn) {
    if (editBtn.textContent === "Edit") {
        const input = document.createElement("input");
        input.type = "text";
        input.value = textElement.textContent;
        input.style.width = "60%";
        input.className = "edit-input";

        textElement.replaceWith(input);
        editBtn.textContent = "Save";
        input.focus();
    } else {
        const input = editBtn.parentElement.parentElement.querySelector(".edit-input");
        const newText = document.createElement("span");
        newText.textContent = input.value;
        input.replaceWith(newText);
        editBtn.textContent = "Edit";
        saveTodos();
    }
}

function saveTodos() {
    const todos = [];
    document.querySelectorAll("#todoList .todo-item span").forEach(span => {
        todos.push({ text: span.textContent, completed: false });
    });
    document.querySelectorAll("#completedList .todo-item span").forEach(span => {
        todos.push({ text: span.textContent, completed: true });
    });
    localStorage.setItem("todos", JSON.stringify(todos));
}

function loadTodos() {
    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    todos.forEach(todo => {
        createTodoElement(todo.text, todo.completed);
    });
}

loadTodos();