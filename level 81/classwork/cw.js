let h1 = document.getElementById("clock1")

let time = new Date()




function interval(){
    let time = new Date()
    h1.innerHTML = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`
    if (time.getSeconds() < 10){
        h1.innerHTML = `${time.getHours()}:${time.getMinutes()}:0${time.getSeconds()}`
    }
}

setinterval(interval, 1000)