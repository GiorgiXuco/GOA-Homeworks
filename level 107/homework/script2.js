// 3) შექმენით ობიექტი მინიმუმ 3 კუთვნილებით(name, age, height). გამოიყენეთ ამ ობიექტზე დესტრუქცია ისე, რომ name კუთვნილება შეინახოს ცვლადში, ხოლო დანარჩენი კუთვნილებებისგან შეიქმნას ახალი ობიექტი(დაგჭირდებათ rest ოპერატორი)


const person = {
    name: "gio",
    age: 15,
    height: 180
}

const { name, ...otherInfo } = person

console.log(name)
console.log(otherInfo)