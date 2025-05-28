// შექმენით ფორმა, შემდგარი მინიმუმ სამი input-ის. მომხმარებელს შემოატანინეთ სრული სახელი, ემაილი და პაროლი. შემოტანილი მონაცემები გამოიტანეთ საიტზე.

const form = document.querySelector("form")



form.addEventListener("submit",(e)=>{
    e.preventDefault()

    const entered = {
        name: e.target.name.value,
        email: e.target.email.value,
        password: e.target.password.value
    }

    const table = document.querySelector("table")

    table.innerHTML += `
    <tr>
        <td>${entered.name}</td>
        <td>${entered.email}</td>
        <td>${entered.password}</td>
    </tr>`
})