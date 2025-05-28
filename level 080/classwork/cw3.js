//3) გააკეთეთ მსგავსი ფუნქციონალი Javascript-ის მეშვეობით თუმცა ამჯერად მომხმარებელს შემოატანინეთ სიტყვა. მეორე ინფუთის ველში ასევე გაამეორებინეთ თავდაპირველად შემოტანილი სიტყვა. იმ შემთხვევაში თუ შემოტანილი ორი მნიშვნელობა არ ემთხვევა ერთმანეთს, console-ში გამოიტანეთ "The values should be equal and not blank". ხოლო თუ ემთხვევა - "The operation was successful".

function validate(){
    const n1 = document.getElementById("name")
    const n2 = document.getElementById("name2")

    if(n1.value != "" && n2.value != ""){
        if(n1.value == n2.value){
            alert("The operation was successful")
            return true
        }
        
    }
    else{
        alert("The values should be equal and not blank")
    }
    return false
}