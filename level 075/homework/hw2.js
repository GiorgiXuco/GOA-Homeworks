// 2)არსებულ car ობიექტს , ობიექტის გარედან დაამატეთ color  და price  , ასევე ამოშალეთ milage , შემდეგ ყველაფერი გამოსახეთ console-ში 

const car = {
    company : "bmw",
    model : "m5 e60",
    milage : 150000,
    year : 2003,
    condition : "good",
    checkCondition: function () {
        if (this.condition === "good" || this.condition === "bad") {
            console.log(`Car is in ${this.condition} condition`);
        } else {
            console.log("Condition not recognized");
        }
    }
}

car.color = "Red";
car.price = 15000;

delete car.milage;

console.log(car);