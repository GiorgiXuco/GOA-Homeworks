// 4)შექმენით სია სადაც იქნება user-ების სახელი და გვარი და ახალ სიაში დაამატეთ ამ იუსერების  ინიციალები სახელის და გვარის პირველი ასოები, მაგალითად: გიორგი ბიბილაშვილი -> გ.ბ

let users = ["გიორგი ბიბილაშვილი", "გიორგი ხუციშვილი", "ნიკა ორბელაშვილი", "საბა მიხელიძე"];
let initialsList = []; 

for (let i = 0; i < users.length; i++) {
    let parts = users[i].split(" "); 
    let initials = parts[0][0] + "." + parts[1][0]; 
    initialsList.push(initials); 
}

console.log(initialsList); 