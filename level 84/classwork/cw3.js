
let div = document.querySelectorAll("div")

document.addEventListener("keydown", function(event){
    div.style.backgroundColor = "red"
    div.inneHTML = "<h1>BYE</h1>"
    console.log(event.key)
})

document.addEventListener("keyup", function(event){
    div.style.backgroundColor = "dodgerblue"
    div.inneHTML = "<h1>Hello</h1>"
    console.log(event.key)
})