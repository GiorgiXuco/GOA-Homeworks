// გამოიყენე დესტრუქცია და მიანიჭე default მნიშვნელობა "Unknown" ცვლადს country, თუ ის არ არსებობს

const person = {
    name: "Nino",
    age: 28
}

const { name, country = "Unknown" } = person

console.log(name)
console.log(country)