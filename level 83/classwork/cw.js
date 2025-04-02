let hex = '0123456789abcdef'
let resultColor = ''

let clickButton = document.getElementById('button')
let Color = document.getElementById('color')



let Main = document.querySelector('main')
clickButton.addEventListener('click', function(){
    for (let num = 0; num < 6; num++){
        let randomIndex = Math.floor(Math.rendom()*16)
        resultColor = resultColor + hexColor[randomIndex]
    }
    Color.textContent = resultColor;
    Color.style.color = resultColor;

    Main.style.backgroundColor = resultColor
    resultColor = '#'
})