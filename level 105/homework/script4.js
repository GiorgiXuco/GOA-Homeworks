// გამოიძახე ეს ფუნქცია ობიექტით და გამოიყენე დესტრუქცია პარამეტრებში

const printUser = ({ name, age }) => {
    console.log(`${name} is ${age} years old`)
}

const user = {
    name: "Ana",
    age: 30
}

printUser(user)