// ✅ დავალება 1: შექმენი შენი ცხოველების კოლექცია Map-ით

// 🧠 თემა: Map
// 📌 დავალება:
// შექმენი ცხოველების Map, სადაც key არის ცხოველის სახელი, და value არის მისი ხმა. დაამატე მინიმუმ 3 ახალი ცხოველი. შემდეგ, for-of ლუპით გამოიტანე ყველა ცხოველის ხმა კონსოლში.

let animals = new Map([["Animal", "Cat"], ["Voice", "Meow"]]);
animals.set("Dog", "Woof").set("Cow", "Moo").set("Pig", "Oink");

for (let animal of animals.values()) {
    console.log(animal);
}


// ✅ დავალება 2: მომხმარებლების უნიკალური სახელები

// 🧠 თემა: Set
// 📌 დავალება:
// შექმენი Set, რომელშიც სახელები იმეორებს (მაგ. "Davit", "Nino", "Davit", "Saba", "Nino"). გამოიყენე Set რომ მხოლოდ უნიკალური სახელები დაიტოვოს და კონსოლში დაპრინტე.
let names = ["Davit", "Nino", "Davit", "Saba", "Nino"];

let newNames = new Set(names);
console.log(newNames);

// ✅ დავალება 3: ასინქრონული მუშაობის მიმდევრობა

// 🧠 თემა: setTimeout
// 📌 დავალება:
// დაწერე 3 ცალკე setTimeout, რომლებიც აჩვენებენ:

//     "Start"

//     "Middle" (1 წამის შემდეგ)

//     "End" (2 წამში)

// ამით ნახავ როგორ მუშაობს ასინქრონული კოდები.

setTimeout(() => {
    console.log("Start");
}, 0);

setTimeout(() => {
    console.log("Middle");
}, 1000);

setTimeout(() => {
    console.log("End");
}, 2000);

// ✅ დავალება 4: map-ის გასუფთავება და შემოწმება

// 🧠 თემა: Map
// 📌 დავალება:
// შექმენი ახალი Map, დაამატე მინიმუმ 2 key-value წყვილი, შემდეგ წაშალე ერთი მათგანი delete მეთოდით, და ბოლოს გამოიყენე .has() რომ შეამოწმო თუ ის წაშლილი key არსებობს თუ არა.

let user = new Map([
    ["Name", "Lika"],
    ["Surname", "Chkhikvadze"],
    ["ID", "1234"]
]);

user.delete("Surname");
console.log(user);

console.log(user.has("Surname"));

// ✅ დავალება 5: Set-ით რეალური მაგალითი

// 🧠 თემა: Set
// 📌 დავალება:
// წარმოიდგინე რომ ხარ კონცერტზე და ბილეთზე შემოწმება გიწევს. სახელების სია (array) მოგეცა, სადაც ზოგიერთი ადამიანი ორჯერ წერია. გამოიყენე Set რომ ერთი და იმავე ადამიანს ერთხელ ჩაუტარო შემოწმება.

let ticketnames = ["Lika", "Saba", "Giorgi", "Saba", "Ana", "Lika", "Nika"];

let filteredNames = new Set(ticketNames)
console.log(filteredNames);