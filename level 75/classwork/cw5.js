// შექმნილ ობიექტს გადაუარეთ for ციკლით და გამოიტანეთ key და value შემდეგი ფორმატით: "{key} is {value}"

const giorgi = {
    name: "gio",
    age: 15,
    city: "Tbilisi"
}

for (let key in giorgi) {
    console.log(key + " is " + giorgi[key])
}