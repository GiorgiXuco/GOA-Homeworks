let submit = document.getElementById("btn-1")

let ul = document.getElementsByTagName("ul")[0]

submit.addEventListener("click", () =>{
    let inp = document.getElementById("task").value
    let li = document.createElement("li")
    li.textContent = inp
    ul.appendChild(li)
})