//  შექმენით საიტი მანქანების შესახებ, დღეს ნასწავლი მასალის გამოყენებით: 
// --- ვიზუალური მხარე ---
// ◾ საიტის დიზანი: თქვენ როგორიც გაგიხარდებათ.
// ◾ ააგეთ სია(ul/ol), სადაც მოთავსებული იქნება სხვადასხვა ბრენდისა და მახასიათებლების მქონე მანქანები.
// ◾ თითოეულ მანქანის სახელზე დაჭერით უნდა გამოჩნდეს მანქანის სურათი და მახასიათებლები; გარდა ამისა getInfo და engineSound ღილაკები.
// --- ტექნიკური მხარე ---
// ◾ შექმენით მშობელი Car კლასი, ზოგადი თვისებებითა და getInfo მეთოდით.
// ◾ შექმენით შვილეული კლასები(მაგ. BMW, Mercedes, Audi და ა.შ), რომლებსაც დამატებით ექნებათ რამოდენიმე თვისება და მეთოდი.
// ◾ გამოიყენეთ დღეს ნასწავლი super keyword
// ◾ საიტზე getInfo და engineSound ღილაკებზე დაჭერით უნდა დაიკვრას შესაბამისი აუდიო ფაილები და საიტზე გამოჩნდეს კონკრეტული მანქანის სურათი და მახასიათებლები.
// ◾ საიტზე თითოეული მანქანის შესაბამისი მახასიათებლები Car კლასის შვილეული კლასების ობიექტების getInfo მეთოდის გამოყენებით უნდა გამოსახოთ.

class Car {
    constructor(brand, model, year, color, image, sound) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.color = color;
        this.image = image;
        this.sound = sound;
    }

    getInfo() {
        return `
          <h2>${this.brand} ${this.model}</h2>
          <img src="${this.image}" id="car-image" alt="${this.brand}">
          <p>წელი: ${this.year}</p>
          <p>ფერი: ${this.color}</p>
        `;
    }

    engineSound() {
        const audio = document.getElementById('car-audio');
        audio.src = this.sound;
        audio.play();
    }
}

class BMW extends Car {
    constructor(model, year, color) {
        super('BMW', model, year, color, 'https://wheelfront.com/wp-content/uploads/2024/04/bmw-f90-m5-comp-with-zperformance-zpforged2-wheels-3-1200x1200.jpg', 'sounds/PA0003654.mp3');
    }
}

class Mercedes extends Car {
    constructor(model, year, color) {
        super('Mercedes', model, year, color, 'https://hips.hearstapps.com/hmg-prod/images/2021-mercedes-benz-s-class-110-1598983698.jpg?crop=0.733xw:1.00xh;0.122xw,0&resize=1200:*', 'sounds/s63-amg-v8-engine-revs-41131.mp3');
    }
}

class Audi extends Car {
    constructor(model, year, color) {
        super('Audi', model, year, color, 'data:image/jpeg;base64,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', 'sounds/audi-v8-acceleration-sound-6067.mp3');
    }
}

const cars = {
    bmw: new BMW('M5', 2022, 'შავი'),
    mercedes: new Mercedes('S-Class', 2021, 'თეთრი'),
    audi: new Audi('RS7', 2023, 'წითელი')
};

function selectCar(key) {
    const car = cars[key];
    const container = document.getElementById('car-details');
    container.innerHTML = car.getInfo();

    const infoButton = document.createElement('button');
    infoButton.innerText = 'getInfo';
    infoButton.onclick = () => {
        container.innerHTML = car.getInfo();
    };

    const soundButton = document.createElement('button');
    soundButton.innerText = 'engineSound';
    soundButton.onclick = () => {
        car.engineSound();
    };

    container.appendChild(infoButton);
    container.appendChild(soundButton);
}