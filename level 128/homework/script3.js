//3️⃣ დაწერე Promise, რომელიც 2 წამის შემდეგ აბრუნებს მომხმარებლის სახელს (მაგ. "Gio"). შემდეგ then()-ში დააბრუნე ტექსტი "Hello, Gio!" და ბოლოს დაბეჭდე ეს ტექსტი



const getUsername = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Gio");
    }, 2000);
});

getUsername
    .then((username) => {
        return `Hello, ${username}!`;
    })
    .then((greeting) => {
        console.log(greeting);
    });
