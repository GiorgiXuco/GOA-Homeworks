// გამოიყენე დესტრუქცია ისე, რომ პირველი ელემენტი ცალკე მიიღო, ხოლო დანარჩენი rest მასივში

const numbers = [10, 20, 30, 40, 50]

const [first, ...rest] = numbers

console.log(first)
console.log(rest)