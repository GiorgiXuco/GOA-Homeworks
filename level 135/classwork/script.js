// შექმენით რაღაცა პრომისი რომელიც რაიმე მნიშვნელობას დააბრუნებს გარკვეული დროის(1 წამიდან 10 წამამდე) შემდეგ. თუ ეს პრომისი პასუხს არ დააბრუნებს 5 წამის განმავლობაში, მაშინ დაარეჯექთეთ პრომისი და კონსოლზე გამოიტანეთ მესიჯი, რომ პრომისმა დროს გადააჭარბა.


function randomDelayPromise() {
    return new Promise((resolve) => {
        const delay = Math.floor(Math.random() * 10) + 1
        console.log(`პრომისი პასუხს დააბრუნებს ${delay} წამში (თუ დაასწრებს!)`)
        setTimeout(() => {
            resolve(`პასუხი დაბრუნდა ${delay} წამის შემდეგ`)
        }, delay * 1000)
    })
}

function withTimeout(promise, timeout) {
    return new Promise((resolve, reject) => {
        const timer = setTimeout(() => {
            reject(new Error('პრომისმა გადააჭარბა დროს (timeout)!'))
        }, timeout)

        promise.then((value) => {
            clearTimeout(timer)
            resolve(value)
        }).catch((err) => {
            clearTimeout(timer)
            reject(err)
        })
    })
}

withTimeout(randomDelayPromise(), 5000)
    .then((result) => {
        console.log('პრომისის პასუხი:', result)
    })
    .catch((err) => {
        console.log('შეცდომა:', err.message)
    })