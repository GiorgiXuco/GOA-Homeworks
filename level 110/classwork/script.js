document.getElementById("addBtn").addEventListener("click", addTodo);
document.getElementById("todoInput").addEventListener("keypress", function (e) {
    if (e.key === "Enter") addTodo();
});

function addTodo() {
    const input = document.getElementById("todoInput");
    const value = input.value.trim();
    if (value === "") return;

    const todoList = document.getElementById("todoList");

    const item = document.createElement("div");
    item.className = "todo-item";

    const text = document.createElement("span");
    text.textContent = value;

    const buttons = document.createElement("div");
    buttons.className = "todo-buttons";

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.classList.add("edit");
    editBtn.onclick = () => editTodo(text, editBtn);

    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.onclick = () => item.remove();

    buttons.appendChild(editBtn);
    buttons.appendChild(delBtn);

    item.appendChild(text);
    item.appendChild(buttons);
    todoList.appendChild(item);

    input.value = "";
}

function editTodo(textElement, editBtn) {
    if (editBtn.textContent === "Edit") {
        const input = document.createElement("input");
        input.type = "text";
        input.value = textElement.textContent;
        input.style.width = "60%";

        textElement.replaceWith(input);
        editBtn.textContent = "Save";

        input.focus();
    } else {
        const newText = document.createElement("span");
        newText.textContent = editBtn.previousSibling.value;

        editBtn.previousSibling.replaceWith(newText);
        editBtn.textContent = "Edit";
    }
}
