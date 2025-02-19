// var userName = "giorgi"
// let name = "gio"

// console.log(name)


// შექმენით ლოგიკური ოპერატორების გამოყენებით ყველა შესაძლო კომბინაცია გამოიუყენეთ and და or ლოგიკური ოპერატორები, &&, ||



// and = &&

// or = ||


// console.log(true && true)
// console.log(true && false)
// console.log(false && false)

// console.log(false || false)
// console.log(false || true)
// console.log(true || true)


//2) მომხმარებელს შემოატანინეთ სახელი შემდეგ კი შეამოწმეთ თუ მომხამრებლის შემოტანილი სახელი თქვენს სახელს ემთხვევა მაშინ დაიბეჭდოს რომ სეხნიები ხართ

let userName = prompt("enter name")
let myName = "giorgi"

if(userName == myName){
    console.log("sexniebi vart")
}else if(userName == "gio"){
    console.log("sexniebi vart")
}else{
    console.log("ar vart sexniebi")
}


let i = 0

while(i < 10){
    console.log(i)

    i++
}