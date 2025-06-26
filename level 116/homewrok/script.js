//  1) შექმენით Transport მშობელი კლასი, რომელსაც ექნება: 
// --- თვისებები --- 
// მაქსიმალური სიჩქარე(maxSpeed): Number
// ფერი (color): String
// საწვავის რაოდენობა(ლიტრებში) (fuel): Number 
// განვლილი მანძილი (distanceTraveled): Number = 0 (ობიექტის შექმნის დროს არის 0)
//  --- მეთოდები --- 
// საწვავის შევსება refuel(liter) 
// ◼ მეთოდი უნდა ავსებდეს(უმატებდეს) ტრანსპორტის საწვავის რაოდენობას.
// ◼ მოახდინეთ liter არგუმენტის ვალიდაცია(უნდა იყოს Number ტიპის, არაუარყოფითი რიცხვი)
// ფერის შეცვლა changeColor(color)
// ◼ მეთოდი უნდა ცვლიდეს ტრანსპორტის ფერს.
// ◼ მოახდინეთ color არგუმენტის ვალიდაცია(უნდა იყოს String ტიპის)
// ინფორმაცია ტრანსპორტზე getInfo()
// ◼ მეთოდი უნდა აბრუნებდეს ტრანსპორტის შესახებ ინფორმაციას: 
//     'ეს არის რაღაც ტრანსპორტი, რომლის მაქს. სიჩქარეა - ${maxSpeed}; ფერი - ${color}; საწვავის რაოდენობა - ${fuel}; განვლილი მანძილი - ${distanceTraveled}'
// გადაადგილება move(distance, fuelNeeded)
// ◼ ეს მეთოდი გადაადგილებს ტრანსპორტს გარკვეული მანძილით(distance) და ამისთვის ხარჯავს გარკვეული რაოდენობის საწვავს(fuelNeeded).
// ◼ მოახდინეთ არგუმენტების ვალიდაცია(ორივე უნდა იყოს Number ტიპის).
// ◼ შეამოწმეთ აქვს თუ არა ტრანსპორტს საკმარისი საწვავი მითითებული მანძილის სრულად დასაფარად.
// ◼ თუ ტრანსპორტს აღმოაჩნდა საკმარისი საწვავი - განახორციელეთ გადაადგილება(შეცვალეთ ობიექტის distanceTraveled თვისება)
// ◼ თუ საკმარისი საწვავი არ არის მეთოდმა დააბრუნოს ერორი(განახორციელეთ თქვენ როგორც გინდათ)
// --- --- --- --- ---
//  ამის შემდეგ შექმენით შვილეული კლასები - მაგ. (Car, Plane, Boat და ა.შ.), რომლებიც მემკვიდრეობით მიიღებენ Transport კლასის თვისებებსა და მეთოდებს.
// ◼ შვილეულ კლასებს შეუცვალეთ getInfo მეთოდი.
// ◼ Car კლასის შემთხვევაში getInfo მეთოდმა უნდა დააბრუნოს:
//     'ეს არის რაღაც მანქანა, რომლის მაქს. სიჩქარეა - ${maxSpeed}; ფერი - ${color}; საწვავის რაოდენობა - ${fuel}; განვლილი მანძილი - ${distanceTraveled}'

class Transport {
    constructor(maxSpeed, color, fuel) {
        this.maxSpeed = maxSpeed;
        this.color = color;
        this.fuel = fuel;
        this.distanceTraveled = 0;
    }

    refuel(liter) {
        if (typeof liter !== "number" || liter < 0) {
            throw new Error("liter უნდა იყოს არაუფრო უარყოფითი რიცხვი");
        }
        this.fuel += liter;
    }

    changeColor(color) {
        if (typeof color !== "string") {
            throw new Error("ფერი უნდა იყოს სტრიქონი");
        }
        this.color = color;
    }

    getInfo() {
        return `ეს არის რაღაც ტრანსპორტი, რომლის მაქს. სიჩქარეა - ${this.maxSpeed}; ფერი - ${this.color}; საწვავის რაოდენობა - ${this.fuel}; განვლილი მანძილი - ${this.distanceTraveled}`;
    }

    move(distance, fuelNeeded) {
        if (typeof distance !== "number" || typeof fuelNeeded !== "number") {
            throw new Error("სიშორე და საწვავი უნდა იყოს რიცხვები");
        }
        if (fuelNeeded > this.fuel) {
            throw new Error("არ არის საკმარისი საწვავი გადაადგილებისთვის");
        }
        this.fuel -= fuelNeeded;
        this.distanceTraveled += distance;
    }
}

class Car extends Transport {
    getInfo() {
        return `ეს არის რაღაც მანქანა, რომლის მაქს. სიჩქარეა - ${this.maxSpeed}; ფერი - ${this.color}; საწვავის რაოდენობა - ${this.fuel}; განვლილი მანძილი - ${this.distanceTraveled}`;
    }
}

class Plane extends Transport {
    getInfo() {
        return `ეს არის რაღაც თვითმფრინავი, რომლის მაქს. სიჩქარეა - ${this.maxSpeed}; ფერი - ${this.color}; საწვავის რაოდენობა - ${this.fuel}; განვლილი მანძილი - ${this.distanceTraveled}`;
    }
}

class Boat extends Transport {
    getInfo() {
        return `ეს არის რაღაც ნავი, რომლის მაქს. სიჩქარეა - ${this.maxSpeed}; ფერი - ${this.color}; საწვავის რაოდენობა - ${this.fuel}; განვლილი მანძილი - ${this.distanceTraveled}`;
    }
}