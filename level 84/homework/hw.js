let box = document.getElementById("movableBox");
let x = 0, y = 0;
let step = 10;

document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowUp") y -= step;
    if (event.key === "ArrowDown") y += step;
    if (event.key === "ArrowLeft") x -= step;
    if (event.key === "ArrowRight") x += step;
    
    box.style.transform = `translate(${x}px, ${y}px)`;
});