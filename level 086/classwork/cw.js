//შექმენით ცვლადი ამ ცვლადში მომხმარებელს შემოატანინეთ   სახელი და შემდეგ თუ ეს სახელი დაემთხვევა თქვენს სახელს დაბეჭდეთ თქვენი სახელი

let username = prompt("enter your name")

let myname = "giorgi"



switch(myname){
    case username:
        console.log("giorgi")
}



let score = 50
switch(score){
    case score >= 50 && score<=60:
        console.log("c")
        break
    default:
        console.log("uoy failed")
}