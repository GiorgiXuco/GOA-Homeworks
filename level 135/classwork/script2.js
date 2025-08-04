// შექმენით რაღაცა პრომისი რომელიც რაიმე მნიშვნელობას დააბრუნებს გარკვეული დროის(1 წამიდან 10 წამამდე) შემდეგ. შექმენით ასევე მეორე პრომისი, რომელიც იქნება დროის ლიმიტერი - დაარეჯექთებს რაიმე ერორს, ვთქვათ 5 წამში. გამოიყენეთ race მეთოდი


function randomDelayPromise() {
    const delay = Math.floor(Math.random() * 10) + 1
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`დაასრულა ${delay} წამში`)
        }, delay * 1000)
    })
}

function timeoutPromise() {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error('Timeout: დროის ლიმიტი ამოიწურა 5 წამში'))
        }, 5000)
    })
}
Promise.race([randomDelayPromise(), timeoutPromise()])
    .then((result) => {
        console.log('წარმატება:', result)
    })
    .catch((error) => {
        console.error('შეცდომა:', error.message)
    })
