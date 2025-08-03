// შექმენით პირველი პრომისი, რომელიც:
//  ▪აგენერირებს შემთხვევით რიცხვს 1–დან 15–მდე.
//  ▪აგზავნის მოთხოვნას: 
// https://jsonplaceholder.typicode.com/users/${num}

//  ▪თუ ასეთი მომხმარებელი მოიძებნა (response.ok == true) → resolve მომხმარებლის ინფო.
//  ▪თუ ვერ მოიძებნა → reject შეცდომა.
// შექმენით მეორე პრომისი, რომელიც:
//  ▪აგენერირებს შემთხვევით რიცხვს 1–დან 150–მდე.
//  ▪აგზავნის მოთხოვნას: 
// https://jsonplaceholder.typicode.com/posts/${num}

//  ▪თუ ასეთი პოსტი მოიძებნა (response.ok == true) → resolve პოსტის ინფო.
//  ▪თუ ვერ მოიძებნა → reject შეცდომა.
// გამოიყენეთ Promise.all, რომ ორივე პრომისი პარალელურად გაეშვას.
// Promise.all მეთოდზე  გამოიყენეთ then და catch მეთოდები, 
// then დაბეჭდავს ორივე მიღებულ ინფოს (მომხმარებელი და პოსტი).
// catch reject ის შემთხვევაში დააკონსოლოგებს, რომ მონაცემები ვერ მოიძებნა


const myPromise = new Promise((resolve, reject) => {
    const num = Math.floor(Math.random() * 15) + 1;
    const url = `https://jsonplaceholder.typicode.com/users/${num}`

    fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json()
            } else {
                throw new Error(`მომხმარებელი ID=${num} ვერ მოიძებნა`)
            }
        })
        .then(user => resolve(user))
        .catch(error => reject(error))
});

const mySecondPromise = new Promise((resolve, reject) => {
    const num = Math.floor(Math.random() * 150) + 1;
    const url = `https://jsonplaceholder.typicode.com/posts/${num}`

    fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json()
            } else {
                throw new Error(`პოსტი ID=${num} ვერ მოიძებნა`)
            }
        })
        .then(post => resolve(post))
        .catch(error => reject(error))
});

Promise.all([myPromise, mySecondPromise])
    .then(([user, post]) => {
        console.log('მომხმარებელი:', user)
        console.log('პოსტი:', post)
    })
    .catch(() => {
        console.error('მონაცემები ვერ მოიძებნა')
    })