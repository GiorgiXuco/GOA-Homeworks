// 5)Splice მეთოდის გამოყენებით ჩაანაცვლეთ სიაში ყველა უარყოფითი რიცხვი 0 - ით

let numbers = [5, -3, 10, -8, 15, -1, 20]; 

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) {
        numbers.splice(i, 1, 0); 
    }
}

console.log(numbers); 
