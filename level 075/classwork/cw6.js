// შექმენით ქვემოთ მოცემული ობიექტის მსგავსი ობიექტი თქვენს სასურველ მანქანაზე და დაამატეთ ფუნქცია CarFullInfo, რომლის გამოძაღებაზეც გამოიტანს მთლიან ინფორმაციას მანქანაზე(აუცილებლად გამოიყენეთ string formatting)
const carInfo = {
    brand : "bmw",
    model : "m5 e60",
    year : 2003,
    color : "black",
    carcondition(){
        return `brand of car ${this.brand} model of car ${this.model} year of the car ${this.year} color of the car ${this.color}`
    }
}

console.log(carInfo.carFullInfo())