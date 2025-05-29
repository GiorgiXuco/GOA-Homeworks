function addTodo() {
    const input = document.getElementById("todoInput");
    const value = input.value.trim();
    if (value === "") return;

    const todoList = document.getElementById("todoList");

    const item = document.createElement("div");
    item.className = "todo-item";

    const text = document.createElement("span");
    text.textContent = value;

    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.onclick = () => item.remove();

    item.appendChild(text);
    item.appendChild(delBtn);
    todoList.appendChild(item);

    input.value = "";
}
