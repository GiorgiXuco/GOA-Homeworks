const obj = {
    name: "giorgi",
    surname: "khutsishvili",
    adress: "tbilisi",
}

const jsonOBJ = {
    "name": "giorgi",
    "surname": "khutsishvili",
    "adress": "tbilisi"
}

let strObj = JSON.stringify(obj)

let parseObj = JSON.parse(strObj)


console.log(parseObj)


