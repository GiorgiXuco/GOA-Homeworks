//5️⃣ შექმენი Promise, რომელიც აბრუნებს ინფორმაციას მომხმარებლის შესახებ. პრომისი უნდა აბრუნებდეს ინფორმაციას მომხმარებლის შესახებ( მისი სახელი, გვარი, ასაკი, სქესი და ა.შ.) ობიექტის სახით. პრომისი შიგნით შექმენით ორი ცვლადი: isUserFound და timeToFindUser. პირველში, რანდომულად დააგენერეითეთ 0 ან 1, ხოლო მეორეში რიცხვი 0 დან 10 მდე. Promise მომხმარებლის ინფორმაციას უნდა აბრუნებდეს იმ შემთხვევაში თუ isUserFound === 1 და ამას იმდენი წამი უნდა ანდომებდეს დროს(setTimeout) რამდენიც არის timeToFindUser_ში. თუ isUserFound აღმოჩნდა 0, მაშინ დაარეჯექთეთ რაიმე შეტყობინება. ამ პრომისზე გამოიძახეთ then მეთოდი, რომელსაც გადასცემთ ორ არგუმენტს. ერთ ფუნქციას, რომელიც დაბეჭდავს მომხმარებლის ინფორმაციას, ხოლო მეორე ფუნქციას, რომელიც დაბეჭდავს ერორს

const findUser = new Promise((resolve, reject) => {
    const isUserFound = Math.round(Math.random());
    const timeToFindUser = Math.floor(Math.random() * 11);

    console.log(`Finding user... This will take ${timeToFindUser} seconds.`);

    setTimeout(() => {
        if (isUserFound === 1) {
            const user = {
                firstName: "Gio",
                lastName: "Bakuridze",
                age: 28,
                gender: "Male",
                email: "gio@example.com"
            };
            resolve(user);
        } else {
            reject("User not found.");
        }
    }, timeToFindUser * 1000);
});

findUser.then(
    (user) => {
        console.log("User found:", user);
    },
    (error) => {
        console.log("Error:", error);
    }
);
