// const form = document.querySelector("form")

// const defaultInfo = {
//     email: "giorga@gmail.com",
//     password: "123"
// }

// form.addEventListener("submit",(e)=>{
//     e.preventDefault()

//     const entered = {
//         email: e.target.email.value,
//         password: e.target.password.value
//     }

//     defaultInfo.email === entered.email && defaultInfo.password == entered.password ? alert("registered successfuly") : alert("Email or password is incorect")
// })



function objConstructor(email,password){
    this.email = email;
    this.password = password;
}

console.log(obj)