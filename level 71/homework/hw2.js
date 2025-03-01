// 2)for-ციკლის გამოყენებით იპოვეთ სიაში ყველაზე დიდი და ყველაზე პატარა რიცხვები

let numbers = [12, 5, 8, 130, 44, 2, 98]; 

let smallest = numbers[0]; 
let largest = numbers[0];  

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < smallest) {
        smallest = numbers[i]; 
    }
    if (numbers[i] > largest) {
        largest = numbers[i]; 
    }
}

console.log(smallest);
console.log(largest);