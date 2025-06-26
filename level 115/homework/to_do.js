document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput")
    const taskList = document.getElementById("taskList")
    const finishedList = document.getElementById("finishedList")
    const addTaskBtn = document.getElementById("addTaskBtn")

    let tasks = JSON.parse(localStorage.getItem("tasks")) || []
    let finishedTasks = JSON.parse(localStorage.getItem("finishedTasks")) || []

    function saveToLocalStorage() {
        localStorage.setItem("tasks", JSON.stringify(tasks))
        localStorage.setItem("finishedTasks", JSON.stringify(finishedTasks))
    }

    function renderTasks() {
        taskList.innerHTML = ""
        finishedList.innerHTML = ""

        tasks.forEach((taskText, index) => {
            const taskDiv = createTaskElement(taskText, index, false)
            taskList.appendChild(taskDiv)
        })

        finishedTasks.forEach((taskText, index) => {
            const taskDiv = createTaskElement(taskText, index, true)
            finishedList.appendChild(taskDiv)
        })
    }

    function createTaskElement(text, index, isFinished) {
        const taskDiv = document.createElement("div")
        taskDiv.className = "task-item"

        const span = document.createElement("span")
        span.textContent = text
        if (isFinished) span.style.textDecoration = "line-through"

        taskDiv.appendChild(span)

        if (!isFinished) {
            const doneBtn = document.createElement("button")
            doneBtn.textContent = "Done"
            doneBtn.className = "done-btn"
            doneBtn.addEventListener("click", () => {
                finishedTasks.push(text)
                tasks.splice(index, 1)
                saveToLocalStorage()
                renderTasks()
            })
            taskDiv.appendChild(doneBtn)
        }

        const deleteBtn = document.createElement("button")
        deleteBtn.textContent = "Delete"
        deleteBtn.className = "delete-btn"
        deleteBtn.addEventListener("click", () => {
            if (isFinished) {
                finishedTasks.splice(index, 1)
            } else {
                tasks.splice(index, 1)
            }
            saveToLocalStorage()
            renderTasks()
        })

        taskDiv.appendChild(deleteBtn)

        return taskDiv;
    }

    addTaskBtn.addEventListener("click", () => {
        const taskText = taskInput.value.trim()
        if (taskText === "") return
        tasks.push(taskText)
        taskInput.value = ""
        saveToLocalStorage()
        renderTasks()
    })

    renderTasks()
})
