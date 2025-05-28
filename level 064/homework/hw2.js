// 2) მომხმარებელს შემოატანინეთ 2 რიცხვი, ხოლო შემდეგ გაკეთეთ ამ რიცხვებზე ყველა მათემატიკური ოპერაცია ცალცალკე

var num1 = prompt("enter num1")
var num1 = prompt("enter num2")

console.log("მიმატება")
console.log(num1 +" " + "+" + " " + num1 + " " + "=" + " " + (num1 + num1))

console.log("გამოკლება")
console.log(num1 +" " + "-" + " " + num1 + " " + "=" + " " + (num1 - num1))

console.log("გამრავლება")
console.log(num1 +" " + "*" + " " + num1 + " " + "=" + " " + (num1 * num1))

console.log("გაყოფა")
console.log(num1 +" " + "/" + " " + num1 + " " + "=" + " " + (num1 / num1))