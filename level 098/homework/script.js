let time = document.querySelector(".time1")

let same  = document.querySelector(".same")

let clock = document.querySelector("#clock")

let heartBut = document.querySelector("")

let adress = ["images/black.png","images/red.png","images/blue.png","images/purple.png"]


for(let i=0; i<same.lenght; i++){
    same[i].addEventlisener("click", ()=>{
        clock.src = adress[i]
    })
}





setInterval(() => {
    let date = new Date()
    let hour = date.getHours()
    let minute = date.getMinutes()
    let seconds = date.getSeconds()

    seconds = seconds < 10 ? `0${seconds}` : seconds
    
    minute = minute < 10 ? `0${minute}` : minute
    
    hour = hour < 10 ? `0${hour}` : hour

    time.textContent = `${hour}:${minute}:${seconds}`



},1000)



