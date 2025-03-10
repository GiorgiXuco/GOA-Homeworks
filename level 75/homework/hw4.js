// 4)შექმენი ობიექტი სახელად student რომელსაც ექნება fullName , scores(scores-უნდა იყოს სია რადგან შეინახოთ რამდენიმე მნიშვნელობა) , ასევე ექნება ორი ფუნქცია 1)averageScore()- რომელიც გამოითცლის საშუალო ქულას , 2)checkStudent() - რომელიც გამოითლის მოსწავლის დონეს ქულების მიხედვით , თუ საშუალო ქულა იქნება 90-ზე მეტი გამოსახეთ კონსოლში შემდეგი ტექსტი ("საუკეთესო სტუდენტი")  , თუ საშუალო ქულა იქნება 90 ზე დაბალი და 60 ზე მაღალი გამოსახეთ "კარგი მოსწავლე" , ხოლო თუ საშუალო ქულა იქნება 60 ზე დაბალი გამოსახეთ "ნორმალური მოსწალე"

const student = {
    fullName: "giorgi",
    scores: [95, 88, 92, 85, 78],

    averageScore: function () {
        let sum = 0;
        for (let i = 0; i < this.scores.length; i++) {
            sum += this.scores[i];
        }
        return sum / this.scores.length;
    },

    
    checkStudent: function () {
        let avg = this.averageScore(); 

        if (avg > 90) {
            console.log("საუკეთესო სტუდენტი");
        } else if (avg > 60) {
            console.log("კარგი მოსწავლე");
        } else {
            console.log("ნორმალური მოსწავლე");
        }
    }
};


console.log("საშუალო ქულა:", student.averageScore()); 
student.checkStudent();