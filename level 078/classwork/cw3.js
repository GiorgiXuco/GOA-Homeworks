let body = document.body

let h1 = document.createElement("h1")
let p = document.createElement("p")


body.appendChild(h1)
body.appendChild(p)

h1.innerHTML = "<div id = 'h1' style = 'color:red'></div>"
p.innerHTML = "giorgi"

document.title = "my website"

h1.style.color = "green"



let img = document.createElement("img")

body.appendChild(img)

img.src = "#"
img.alt = "bmw"
