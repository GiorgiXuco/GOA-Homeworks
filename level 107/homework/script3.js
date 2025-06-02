// 4) შექმენით 3 ობიექტი, შემდეგ შექმენით ახალი ობიექტი, სადაც ჩააკოპირებთ სამივე მათგანს.(გამოიყენეთ spread ოპერატორი)


const obj1 = { name: "gio" }
const obj2 = { age: 15 }
const obj3 = { height: 180 }


const mergedObj = { ...obj1, ...obj2, ...obj3 }

console.log(mergedObj)