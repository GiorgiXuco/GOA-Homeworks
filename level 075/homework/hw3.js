//3) შექმენით ობიექტი user , ამ ობიექტში შეინახე შესაბამისი key-ები , for in - ციკლის  გამოყენებით გადაუარე თითოეულ key-ს და გამოსახე console-ში

const user = {
    name: "giorgi",
    sourname : "Khutsishvili",
    age: 15,
    city : "Tbilisi"
};


for (let key in user) {
    console.log(`${key}: ${user[key]}`);
}