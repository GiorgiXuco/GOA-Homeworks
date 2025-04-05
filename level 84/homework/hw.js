
let div = document.querySelector("div")
let positionX = 0
let positionY = 0
let step = 100

document.addEventListener("keydown", function(event){
    if (event.key === "ArrowRight"){
        positionX += step
    }else if (event.key === "ArrowLeft"){
        positionX -= step
    }else if (event.key === "ArrowUp"){
        positionY -= step
    }else if (event.key === "ArrowDown"){
        positionY += step
    }
    div.style.transform = `translate(${positionX}px, ${positionY}px)`
})