// 5) შექმენით ფუნქცია, რომელიც მიიღებს n რაოდენობის სახელს და დაბეჭდავს მათ. შემდეგ შექმენით სახელების სია, დაშალეთ ის და გადაეცით არგუმენტად შექმნილ ფუნქციას.(დაგჭირდებათ reast & spread ოპერატორები)


function printNames(...names) {
    names.forEach((name, index) => {
        console.log(`${index + 1}. ${name}`);
    });
}

const nameList = ["Luka", "Nino", "Giorgi", "Mariam"]

printNames(...nameList)