// 6)შექმენით სია შეიყვანეთ user-ების სახელი და გვარი თუ user-ების სახელი და გვრი იწყება პატარა ასოთი slice-მეთოდის გამოყენებით ამოშალეთ ასეთი სახელები და გვარები სიიდან

let users = ["გიორგი ბიბილაშვილი", "გიორგი ხუციშვილი", "nika orbelashvili", "ლევან კობახიძე", "saba mikhelidze"]; 

let filteredUsers = users.filter(user => user[0] === user[0].toUpperCase()); 

console.log(filteredUsers);