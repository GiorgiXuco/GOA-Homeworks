// 1) შექმენით ფუნქცია რომელსაც არგუმენტად გადაეცემა სია შემდეგ კი დაბეჭდეთ ამ სიის ჯამი


function Sum(numbers) {
    let total = 0; 

    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }

    console.log(total);
}


let numbersList = [1, 2, 3, 4, 5];
Sum(numbersList);
