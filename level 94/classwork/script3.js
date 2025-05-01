// const bnt = document.querySelector("button")


// bnt.addEventListener("click", (e) => console.log(e.target.innerText))


// const names = ["Giorgi", "goga", "saba"]

// const sortNames = (element , index) => {
//     return `${index}:${element}`
// }

// const new_arry = names.map(sortNames)
// console.log()



// 3) შექმენით სია სადაც შეინახავთ რანდომ სახელებეს , map-ის გამოყენებით მიწვდით თითოეულ ელემენტს სიაში და დააბუნეთ ახალი განახლებული სია სადაც იქნება ყველა სახელი დიდი ასოებით დაწეილი



const names = ["Giorgi", "goga", "saba"]

const toUpperCaseNames = element => element.toUpperCase()




const new_array = names.map(toUpperCaseNames)

console.log(new_array)