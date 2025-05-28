//1) დაამატეთ საიტზე ღილაკი როდესაც ამ ღილაკს დააჭერთ მომხმარებელს შემოატანინეთ სახელი და მიღებული დაამატეთ სიაში და ეს სია შეინახეთ localstorage ში, ყოველ ღილაკზე დაჭერის დროს და ახალი სახელის შეყვანის დროს სიაში დაემატოს ახალი ელემენტი და localstorage ში განახლდეს ინფორმაციას ხოლო ამის შემდეგ კონსოლში დაბეჭდეთ localstorage დან წამოღებული ინფორმაცია

let button = document.querySelector("button")
let myArr = []


button.addEventListener("click", function(){
    let input = prompt("enter string:")
    for (let i of myArr){
        if (i == input){
            input = prompt("enter again")
        }
    }

    myArr.push(input)
    localStorage.setItem("key", JSON.stringify(myArr))
    console.log(JSON.parse(localStorage.getItem("key")))
})

