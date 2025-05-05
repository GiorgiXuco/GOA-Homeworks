//3)შექმენით სია სადაც გექნებათ ობიექტები , ამ ობიექტებში უნდა გქონდეთ სტუდენტის სახელი,გვარი და ქულები, ქულები უნდა იყოს სია , თქვენი დავალებაა გამოთვალოთ ქულების საშუალო შემდეგ გაფილტროთ მთავარი სია, ვისი საშუალო ქულაც იქნება მეტი ან ტოლი 90-ზე ისინი გადაიტანეთ გაფილტრულ სიაში , შემდეგ map()-ის საშუალებით გადაუარეთ გაფილტრულ სიას და დააბრუნეთ ახალ სიაში მხოლოდ სტუდენტის სახელები

const students = [
    { name: "გიორგი", surname: "ბერიძე", scores: [95, 90, 92] },
    { name: "ანა", surname: "ლაშქარავა", scores: [85, 88, 84] },
    { name: "ნიკო", surname: "ხეჩინაშვილი", scores: [91, 93, 90] },
    { name: "მარიამი", surname: "ჯაფარიძე", scores: [78, 82, 80] },
    { name: "დათა", surname: "კვარაცხელია", scores: [100, 98, 97] }
];

const studentsWithAverage = students.map(student => {
    let sum = 0;
    for (let i = 0; i < student.scores.length; i++) {
        sum += student.scores[i];
    }
    const average = sum / student.scores.length;
    return { ...student, average };
})

const filteredStudents = studentsWithAverage.filter(student => student.average >= 90)

const names = filteredStudents.map(student => student.name)
console.log(names)