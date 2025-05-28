// 1) შექმენით სია სადაც რენდომულად შეიტანთ რიცხვებს , შემდეგ დაწეეთ ფუნქცია რომელიც გადაუვლის თითოეულ ელემენტს სიაში და დააბრუნებს ახალ სიას სადაც იქნება მხოლოდ ლუწი რიცხვები , ასევე შექმენით იგივენაირი მეორე ფუნქცია კენტი რიცხვებისთვის


const randomNumbers = [2, 3, 5, 634, 674, 23, 44, 23, 9]


function evenNumbers(numbers) {
    return numbers.filter(num => num % 2 === 0)
}

function oddNumbers(numbers) {
    return numbers.filter(num => num % 2 !== 0)
}