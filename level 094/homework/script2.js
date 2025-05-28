// 2)შექმენი სია სადაც რენდომულად შეიყვან რამდენიმე სახელს და გვარს , შემდეგ დაწერე ფუნქცია რომელიც დააბუნებს ახალ სიას სადაც წარმოდგენილი იქნება თითოეული სახელი და გვარი ისე როგორც ინიციალები (Giorgi Bibilashvili => G.B)


// const names = ["giorgi khutsishvili", " gabriel molodini", "giorgi bibilashvili"]


// const getInitialsList = nameList => {
//     return nameList.map(fullName => {
//         const parts = fullName.split(" ")
//         if (parts.length >= 2) {
//             const firstInitial = parts[0][0].toUpperCase()
//             const lastInitial = parts[1][0].toUpperCase()
//             return `${firstInitial}.${lastInitial}`
//         } else {
//             return ""
//         }
//     });
// }

// const result = getInitialsList(names)
// console.log("ინიციალები:", result)


let list = ["giorgi khutsishvili", " gabriel molodini", "giorgi bibilashvili"]

let newlist = list.map(Element =>{
    let names = Element.split(" ")
    return `${Element} > ${names[0][0].toUpperCase()}.${names[1][0].toUpperCase()}`
})

for(let i of list){
    console.log(i)
}