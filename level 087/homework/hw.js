let button = document.querySelector("button")

let player1 = document.getElementById("player1")
let player2 = document.getElementById("player2")

let score1 = document.getElementById("score1")
let score2 = document.getElementById("score2")

let h1 = document.getElementById("h1")

let body = document.body

let audio = new Audio("dice mp3.mp3")

let count1 = 0
let count2 = 0


let player1Style = `<div class='bigdiv'><div class='won'><h2 class='h2'>Player 1 WON</h2><div class='scoresdiv'><h3>P1:${count1+1}</h3><h3>P2:${count2}</h3></div><button>play again</button></div></div>`
let player2Style =`<div class='bigdiv'><div class='won'><h2 class='h2'>Player 2 WON</h2><div class='scoresdiv'><h3>P1:${count1}</h3><h3>P2:${count2+1}</h3></div><button>play again</button></div></div>`




button.addEventListener("click", function(){
    let counter1 = Math.floor(Math.random()*6)+1
    let counter2 = Math.floor(Math.random()*6)+1

    let count1 = 0
    let count2 = 0

    setTimeout(function(){
        player1.src = `dice_${counter1}.png`
        player2.src = `dice_${counter2}.png`
        switch(true){
            case counter1 > counter2:
                h1.textContent = "Player 1 WON"
                count1 ++
                
                break
            case counter1 < counter2:
                h1.textContent = "Player 2 WON"
                count2 ++

                break
            default:
                h1.textContent = "Draw"
            }
            score1.textContent = count1
            score2.textContent = count2

            if(count1 == 10){
                body.innerHTML = player1Style
            }else if(count2 == 10){
                body.innerHTML = player2Style
            }
    }, 400)



    
    
    audio.play()
})