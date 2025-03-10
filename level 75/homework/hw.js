//1)შექმენით ობიექტი car , რომელსაც ექნება 5 key -  company(მწარმოებელი) , model , milage ,year , condition , ამ ობიექტში ასევე უნდა იყოს შენახული ფუნქცია , ამ ფუნქციას პარამეტრად ჰქონდეს condition ,და ამ ფუნქციაში შეამოწმეთ , რომ თუ condition-არის კარგი ან ცუდი დაბეჭდეთ შემდეგი ტექსტი car is in {condition} condition გამოიყენეთ format-ი

const car = {
    company : "bmw",
    model : "m5 e60",
    millage : 150000,
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