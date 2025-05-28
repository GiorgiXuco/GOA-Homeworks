// 1) შექმენით სარეგიდტრაციო ფორმა და ცხრილიფორმის დადასტურებისას, შეყვანილი მონაცემები უნდა დაემატოს ცხრილში, ახალი რიგის სახით, კომენტარებით ახსენით თითოეული ნაბიჯი


const form = document.querySelector("form")



form.addEventListener("submit",(e)=>{
    e.preventDefault()

    const entered = {
        email: e.target.email.value,
        password: e.target.password.value
    }

    const table = document.querySelector("table")

    table.innerHTML += `
    <tr>
        <td>${entered.email}</td>
        <td>${entered.password}</td>
    </tr>`
})



