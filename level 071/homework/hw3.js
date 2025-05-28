// 3)შექმენით სია, ამ სიაში შეინახეთ String-ტიპის მონაცემები და for-ციკლის გამოყენებით ახალ სიაში დაამატეთ ძველი სიიდან ყოველი სიტყვის პირველი ასო

let names = ["giorgi", "nika", "luka", "saba", "levani"]; 
let firstLetters = []; 

for (let i = 0; i < names.length; i++) {
    firstLetters.push(names[i][0]); 
}

console.log(firstLetters);