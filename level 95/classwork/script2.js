// 2)შექმენით სია სადაც გექნებათ რენდომ რიცხვები , შემდეგ ამ რიცხვებს გაფილტრავთ და ამოიღებთ მხოლოდ უარყოფით რიცხვებს , შემდეგ ამ სიას გადამაპავთ და თითოეულ ელემენტს გადააქცევთ დადებით რიცხვად


const numbers = [5, -12, 8, -3, 0, -7, 14, -21]

const negatives = numbers.filter(number => number < 0)

const positives = negatives.map(number => Math.abs(number))

console.log(positives)