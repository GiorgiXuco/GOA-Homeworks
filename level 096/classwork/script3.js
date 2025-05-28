// 2)წინა დავალებაში გამოიყენეთ object constructor
function User(email, password) {
    this.email = email;
    this.password = password;
}

const form = document.querySelector("form")
const table = document.querySelector("table")

form.addEventListener("submit", function (e) {
    e.preventDefault();


    const user = new User(e.target.email.value, e.target.password.value)

    tableBody.innerHTML += `
        <tr>
            <td>${user.email}</td>
            <td>${user.password}</td>
        </tr>
    `

})
