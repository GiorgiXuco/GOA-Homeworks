        document.getElementById("addBtn").addEventListener("click", () => addTodo());
        document.getElementById("todoInput").addEventListener("keypress", function (e) {
            if (e.key === "Enter") addTodo();
        });

        document.getElementById("clearCompleted").addEventListener("click", () => {
            document.getElementById("completedList").innerHTML = "";
            saveTodos();
        });

        function getCurrentTimestamp() {
            const now = new Date();
            return now.toLocaleString(); // eg. "6/14/2025, 15:45:22"
        }

        function addTodo(text = null, createdAt = null, completedAt = null) {
            const input = document.getElementById("todoInput");
            const value = text || input.value.trim();
            if (value === "") return;

            const creationTime = createdAt || getCurrentTimestamp();
            createTodoElement(value, false, creationTime, completedAt);
            if (!text) saveTodos();

            input.value = "";
        }

        function createTodoElement(value, isCompleted, createdAt, completedAt = null) {
            const container = isCompleted ? document.getElementById("completedList") : document.getElementById("todoList");

            const item = document.createElement("div");
            item.className = "todo-item";

            const text = document.createElement("span");
            text.textContent = value;

            const info = document.createElement("div");
            info.style.fontSize = "12px";
            info.style.textAlign = "left";
            info.style.marginTop = "5px";
            info.innerHTML = `შექმნილია: ${createdAt}`;

            if (isCompleted && completedAt) {
                info.innerHTML += `<br>შესრულებულია: ${completedAt}`;
            }

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
                    const completeTime = getCurrentTimestamp();
                    createTodoElement(text.textContent, true, createdAt, completeTime);
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

            const textContainer = document.createElement("div");
            textContainer.appendChild(text);
            textContainer.appendChild(info);

            item.appendChild(textContainer);
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

            document.querySelectorAll("#todoList .todo-item").forEach(item => {
                const text = item.querySelector("span").textContent;
                const createdAt = item.querySelector("div").innerText.split("შექმნილია: ")[1];
                todos.push({ text, createdAt, completed: false });
            });

            document.querySelectorAll("#completedList .todo-item").forEach(item => {
                const text = item.querySelector("span").textContent;
                const [createdAtLine, completedAtLine] = item.querySelector("div").innerText.split("\n");
                const createdAt = createdAtLine.split("შექმნილია: ")[1];
                const completedAt = completedAtLine.split("შესრულებულია: ")[1];
                todos.push({ text, createdAt, completedAt, completed: true });
            });

            localStorage.setItem("todos", JSON.stringify(todos));
        }

        function loadTodos() {
            const todos = JSON.parse(localStorage.getItem("todos")) || [];
            todos.forEach(todo => {
                addTodo(todo.text, todo.createdAt, todo.completedAt);
            });
        }

        loadTodos();