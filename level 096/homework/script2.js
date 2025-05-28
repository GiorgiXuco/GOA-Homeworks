//5) შექმენით სარეგისტრაციო ფორმა. რეგისტრაციის შემდეგ მომხმარებლის მონაცემი უნდა შეინახოთ სიაში ობიექტის სახით. თითოეულ მომხმარებელს უნდა ჰქონდეს თავისი ობიექტი. ამ ობიექტებს კარგი იქნება თუ შექმნით ობიექტის კონსტრუქტორი ფუნქციის მეშვეობით. გააკეთეთ შემოწმება, რომ მომხმარებელი უკვე დაკავებული ემაილით ვერ დარეგისტრირდეს. რეგისტრაციის ფორმის ქვემოთ შექმენით ავტორიზაციის ფორმა, რომლის დადასტურების შემთხვევაში მოხდება შემოწმება შემოტანილი მონაცემებით თუ არსებობს ექაუნთი და ავტორიზაციის წარმატებით/წარუმატებლად დასრულების შემთხვევაში გამოიტანეთ შესაბამისი alert მესიჯი.

function User(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
}

const users = [];

document.getElementById('registerForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('regName').value;
    const email = document.getElementById('regEmail').value.toLowerCase();
    const password = document.getElementById('regPassword').value;

    const emailExists = users.some(user => user.email === email);

    if (emailExists) {
        alert("ეს ელ-ფოსტა უკვე გამოიყენება.");
        return;
    }

    const newUser = new User(name, email, password);
    users.push(newUser);
    alert("რეგისტრაცია წარმატებით დასრულდა!");
    this.reset();
});

document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('loginEmail').value.toLowerCase();
    const password = document.getElementById('loginPassword').value;

    const foundUser = users.find(user => user.email === email && user.password === password);

    if (foundUser) {
        alert(`მოგესალმებით, ${foundUser.name}! ავტორიზაცია წარმატებით დასრულდა.`);
    } else {
        alert("ავტორიზაცია ვერ მოხერხდა. შეამოწმეთ ელ-ფოსტა ან პაროლი.");
    }

    this.reset();
});