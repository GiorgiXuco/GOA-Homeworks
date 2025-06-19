// 1) შექმენით კლასი პერსუსულ ზღვის გოჭზე და დაამატეთ მისი ფერის ზომის და წლოვანების(რომელ წელსაა დაბადებული, რომელ თვეში და რომელ რიცხვში) ამსახველი მნიშვნელობები, შემდეგ შექმენით მეთოდი რომელიც გამოითვლის ამ პერსუსული ზღვისგოჭის წლოვანებას და დააბრუნებს შედეგს თუ რამდენი წლისაა რამდენი თვისაა და რამდენი დღისაა

class PersianGuineaPig {
    constructor(color, size, birthYear, birthMonth, birthDay) {
        this.color = color
        this.size = size
        this.birthDate = new Date(birthYear, birthMonth - 1, birthDay)
    }

    Age() {
        const today = new Date();
        let years = today.getFullYear() - this.birthDate.getFullYear()
        let months = today.getMonth() - this.birthDate.getMonth()
        let days = today.getDate() - this.birthDate.getDate()

        if (days < 0) {
            months -= 1
            const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0)
            days += prevMonth.getDate()
        }

        if (months < 0) {
            years -= 1;
            months += 12;
        }

        return {
            years: years,
            months: months,
            days: days
        };
    }

    showAge() {
        const age = this.Age();
        console.log(`ზღვის გოჭი არის ${age.years} წლის, ${age.months} თვის და ${age.days} დღის.`);
    }
}







































// class Car {
//     constructor(name, model,year,color){
//         this.name = name
//         this.model = model
//         this.year = year
//         this.color = color
//     }

//     sound() {
//         console.log(`${this.model} makes sound: "honk`)
//     }
// }


// const car1 = new Car("mercedes", "g-class", 2018, "black")


// console.log(car1.name)
// console.log(car1.model)

// car1.sound()