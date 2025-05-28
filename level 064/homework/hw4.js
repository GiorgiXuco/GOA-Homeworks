// შექმენი ორი input შეადარე ორი რიცხვი და დაბეჭდე შედეგი.

var num = prompt("enter num:")
var num2 = prompt("enter num2:")

console.log(num > num2)


//  შექმენი 2 ცვლადი შეამოწმე, ტოლია თუ არა ორი რიცხვი. 

var num = prompt("enter num:")
var num2 = prompt("enter num2:")

console.log(num === num2)


// მომხმარებელს შემოახანინე input შეამოწმე, არის თუ არა რიცხვი 50-ზე ნაკლები.

var num = prompt("enter num:")

console.log(num < 50)


//შემოიტანე 2 input შეამოწმე, არის თუ არა ორი რიცხვის ჯამი 100-ზე მეტი.

var num = prompt("enter num:")
var num2 = prompt("enter num2:")

console.log((num + num2) > 100 )


// მომხარებელს შემოატანინე input შეამოწმე, არის თუ არა რიცხვი 10-ზე მეტი ან ტოლი.

var num = prompt("enter num:")

console.log(num >= 10)


// შემოიტანე 1 input და 1 ცლადი შეადარე, არის თუ არა ერთი რიცხვი მეორეზე ნაკლები ან ტოლი.

var num = prompt("enter num:")
num2 = 155

console.log(num <= num2)


// მომხმარებელს შემოატანინეთ სახელი და შეამოწმეთ ეს სახელი უდრის თუ არა თქვენს სახელს 

var name = prompt("enter name:")

console.log(name === "Giorgi")


// მომხმარებელს შემოატანინეთ პაროლი შემდეგ კითხეთ ხელახლა რომ გაიმეოროს პაროლი და შეამოწმეთ უდრის თუ არა ისინი ერთმანეთს

var pas = prompt("enter password:")
var pas2 = prompt("enter password again:")

console.log(pas === pas2)