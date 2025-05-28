// 3)შექმენით ფუნქცია რომელიც სიიდან ამოიღებს ყველა ელემენტს და დააბრუნებს ახალ სიას სადაც მხოლოდ 5 სიმბოლოზე მეტი სიტყვები მოხვდებიან

const words = [
    "hello",
    "world",
    "JavaScript",
    "apple",
    "list",
]


const LongWords = wordList => {
    return wordList.filter(word => word.length > 5)
}


const longWords = LongWords(words)
console.log("სიტყვები 5 სიმბოლოზე მეტი:", longWords)