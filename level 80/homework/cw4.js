// 4) შექმენით სარეგისტრაციო ვებ-საიტი, რომელიც დიზაინის მხრივ მაქსიმალურად დახვეწავთ. მომხმარებელს Input ველებში შემოატანინეთ Email, Password და კიდევ ერთხელ გაამეორებინეთ Password, აუცილებლად დაამატეთ Submit ღილაკიც. გაიხსენეთ ფუნქცია, რომელიც გაკვეთილზე გავაკეთეთ და თქვენით დაამატეთ მსგავსი ფუნქციონალი თქვენს სარეგისტრაციო საიტზე. იმ შემთხვევაში თუ შეყვანილი პაროლი და გამეორებული პაროლი არ ემთხვევა ერთმანეთს alert box-ში გამოიტანეთ "Passwords do not match eachother. Try again.", თუ ორივე პაროლის შესაყვანი ველი ცარიელი იქნება გამოიტანეთ "Input fields cannot be empty.", ხოლო იმ შემთხვევაში თუ  შეყვანილი პაროლი და გამეორებული პაროლი ემთხვევა ერთმანეთს alert box-ში "Your login was successful" გამოიტანეთ;


function validateForm() {
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    
    if (!password || !confirmPassword) {
        alert("Input fields cannot be empty.");
    } else if (password !== confirmPassword) {
        alert("Passwords do not match each other. Try again.");
    } else {
        alert("Your login was successful");
    }
}