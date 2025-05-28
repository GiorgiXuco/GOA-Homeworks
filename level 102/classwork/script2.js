//დაამატეთ საიტზე ღილაკი როდესაც ამ ღილაკს დააჭერთ მომხმარებელს შემოატანინეთ სახელი, გვარი, ასაკი და მეილი ამ მონაცემების შექმენით ობიექტი შეგიძლიათ გამოიყენოთ კონსტრუქტორი, ეს ობიექტი დაამატეთ სიაში და შექმენით ექაუნთები, ეს ინფორმაცია უნდა ინახებოდეს localstorage ში, ყოველ ღილაკზე დაჭერის დროს უნდა შეიქმნას ახალი ექაუნთი(ობიექტი), დაემატოს ექაუნთებისთვის განკუთვნილ სიაში და განახლდეს localstorage


let button = document.querySelector("button")
let accountArr = []

button.addEventListener("click", function () {
    let name = prompt("შეიყვანე სახელი:")
    let surname = prompt("შეიყვანე გვარი:")
    let age = prompt("შეიყვანე ასაკი:")
    let email = prompt("შეიყვანე მეილი:")

    for (let acc of accountArr) {
        if (acc.email === email) {
            email = prompt("enter again:")
        }
    }

    let account = {
        name: name,
        surname: surname,
        age: age,
        email: email
    }

    accountArr.push(account)

    localStorage.setItem("accounts", JSON.stringify(accountArr))

    console.log(JSON.parse(localStorage.getItem("accounts")))
})