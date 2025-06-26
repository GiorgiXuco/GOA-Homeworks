// 1) შექმენით Shape მშობელი კლასი, რომელსაც ექნება: 
// --- თვისებები --- 
// სოგრძე: Number, 
// სიგანე: Number, 
// ფერი: String 
// და კოორდინატები(სიის/მასივის სახით[x;y]): Array
// --- მეთოდები --- 
// სიგრძის შეცვლა(გაზრდა/შემცირება), 
// სიგანის შეცვლა(გაზრდა/შემცირება), 
// ფერის შეცვლა,
// კოორდინატების შევლა,
// ფიგურის დახატვა - მეთოდი, რომელიც კონსოლზე დაბეჭდავს: 
// 'კოორდინატებზე - ${კოორდინატები} იხატება ფიგურა, რომლის ზომებია ${სიგრძე}/${სიგანე}, რომლის ფერია &{ფერი}.
// --- --- --- --- --- ---
// შექმნეთი შვილეული კლასები - მაგ(Cirle, Rectangle, Triangle და ა.შ.), რომლებიც მემკვიდრეობით მიიღებენ Shape კლასის თვისებებსა და მეთოდებს.
// --- --- --- --- --- ---
// შეუცვალეთ თითოეულ შვილეულ კლასს ფიგურის დახატვის მეთოდი, მაგ. Triangle კლასის შემთქვევაში, ფიგურის დახატვის მეთოდი კონსოლზე დაბეჭდავს:
// 'კოორდინატებზე - ${კოორდინატები} იხატება სამკუთხედი, რომლის ზომებია ${სიგრძე}/${სიგანე}, რომლის ფერია &{ფერი}.


class Shape {
    constructor(length, width, color, coordinates) {
        this.length = length;
        this.width = width;
        this.color = color;
        this.coordinates = coordinates;
    }

    changeLength(newLength) {
        this.length = newLength;
    }

    changeWidth(newWidth) {
        this.width = newWidth;
    }

    changeColor(newColor) {
        this.color = newColor;
    }

    changeCoordinates(newCoordinates) {
        this.coordinates = newCoordinates;
    }

    draw() {
        console.log(
            `კოორდინატებზე - ${this.coordinates} იხატება ფიგურა, რომლის ზომებია ${this.length}/${this.width}, რომლის ფერია &${this.color}.`
        );
    }
}


class Rectangle extends Shape {
    draw() {
        console.log(
            `კოორდინატებზე - ${this.coordinates} იხატება მართკუთხედი, რომლის ზომებია ${this.length}/${this.width}, რომლის ფერია &${this.color}.`
        );
    }
}

class Circle extends Shape {
    draw() {
        console.log(
            `კოორდინატებზე - ${this.coordinates} იხატება წრე, რომლის ზომებია ${this.length}/${this.width}, რომლის ფერია &${this.color}.`
        );
    }
}

class Triangle extends Shape {
    draw() {
        console.log(
            `კოორდინატებზე - ${this.coordinates} იხატება სამკუთხედი, რომლის ზომებია ${this.length}/${this.width}, რომლის ფერია &${this.color}.`
        );
    }
}
