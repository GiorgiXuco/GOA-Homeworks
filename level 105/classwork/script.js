// let arr = ['1', '2', '3', '4']

// let [one, , ,three] = arr


// console.log(one)
// console.log(three)


let a = () => {
    return [1, 3, 2]
}

let [one, , two] = a()

console.log(one)
console.log(two)