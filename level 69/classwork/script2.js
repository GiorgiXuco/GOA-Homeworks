// 2) მომხმარებელს შემოატანინეთ რიცხვი, შემდეგ შემოატანინეთ არჩევანი(ერთიდან მომხმარებლის რიცხვამდე დაბეჭდოს ლუწი, კენტი, კვადრატი ან 3 ის ჯერადი რიცხვი

let userNum = Number(prompt("enter number"))
let userChoise = prompt("enter choise:")

let i = 1


while(i < userNum){
    if(i % 2 == 0 && userChoise == "even"){
        console.log(i)
    }else if(i % 2 == 1 && userChoise == "odd"){
        console.log(i)
    }else if(userChoise == "კვადრატი"){
        console.log(i**2)
    }else if(i % 3 == 0 && userChoise == "3 ის ჯერადი"){
        console.log(i)
    }

    i++
}
