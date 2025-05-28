// 2)createElement-ის გამოყენებით შექმენით ერთი მშობელი div-ელემენტი, ეს div-ი ჩაამატეთ body-ში , შემდეგ ამ მშობელ div-ში ჩაამატეთ კიდევ ორი შვილი div-ი და განალაგეთ ვერტიკალურად ერთმანეთისგან თანაბარი დაშორებით ,  პირველი დივი იყოს წითელი მეორე იყოს მწვანე , ასევე დაუმატეთ სასურველი სტილები

let parentDiv = document.createElement("div")

parentDiv.style.display = "flex"
parentDiv.style.flexDirection = "column"
parentDiv.style.alignItems = "center"
parentDiv.style.justifyContent = "space-around"
parentDiv.style.height = "200px"
parentDiv.style.width = "200px"
parentDiv.style.backgroundColor = "blue"

document.body.appendChild(parentDiv);


let firstChild = document.createElement("div")
firstChild.style.width = "80%"
firstChild.style.height = "50px"
firstChild.style.backgroundColor = "red"
firstChild.style.borderRadius = "10px"
parentDiv.appendChild(firstChild)


let secondChild = document.createElement("div")
secondChild.style.width = "80%"
secondChild.style.height = "50px"
secondChild.style.backgroundColor = "green"
secondChild.style.borderRadius = "10px"

parentDiv.appendChild(secondChild)



















// let p = document.querySelectorAll(".paragraph")

// p[0].style.color = "blue"



// let body = document.body

// let parentDiv = document.createElement("div")

// body.appendChild(parentDiv)



// parentDiv.style.width = "200px"
// parentDiv.style.height = "200px"
// parentDiv.style.background = "green"

