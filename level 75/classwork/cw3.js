// Prompით მომხმარებელს შემოატანინეთ მისი სახელი, გვარი, ასაკი და ჰობი, შემდეგ ეს ინფორმაცია შეინახეთ ობიექტში, ასევე ამ ობიექტს დაუმატეთ ფუნქცია, რომლის გამოძახებაზეც კონსოლში გამოიტანს "Welcome {name}"
const GOA = {
    welcome(){
        console.log('Welcome' + this.name)
    }
}

const yourname = prompt("enter name:")
GOA.name = yourname
const yoursourname = prompt("enter sourname:")
GOA.sourname = yoursourname
const yourage = prompt("enter age:")
GOA.age = yourage
const yourhobby = prompt("enter hobby:")
GOA.hobby = yourhobby

































// levelUntil100(){
//     console.log(100 - this.level)
// },
// Welcome(){
//     console.log('hello')
// },