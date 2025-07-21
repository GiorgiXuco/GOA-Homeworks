//4️⃣ შექმენი Promise, რომელიც აბრუნებს შემთხვევით რიცხვს 1-დან 10-მდე. თუ რიცხვი მეტია 5-ზე, პრომისი დაარეზოლვე, შემდეგ კი then()-ში დაბეჭდე "High number: X", ხოლო თუ 5-ზე ნაკლებია, შედეგი დაარეჯექთე. შექმენი ასევე ერრორ ჰენდლერ ფუნქცია, რომელიც ამ დარეჯექთებულ შედეგს დაპრინტავს.



const randomNumberPromise = new Promise((resolve, reject) => {
    const number = Math.floor(Math.random() * 10) + 1;
    if (number > 5) {
        resolve(number);
    } else {
        reject(`Number too low: ${number}`);
    }
});

randomNumberPromise
    .then((num) => {
        console.log(`High number: ${num}`);
    })
    .catch((error) => {
        console.log(`Error: ${error}`);
    });
