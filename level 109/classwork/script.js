const obj = {
    arr: [
        {
            level: [10, 50, 100],
        },

        {
            level: [20, 40, 60],
            students: [
                {
                    name: "jemala",
                    surname: "barkalaia",
                    score: [8, 8, 10],
                },
                {
                    name: "jumbera",
                    surname: "lamazi",
                    score: [10, 7, 9],
                },
            ],
        },
    ],
}

const [
    { level: [item1Level1, item1Level2, item1Level3] },
    {
        level: [item2Level1, item2Level2, item2Level3],
        students: [
            {
                name: student1Name,
                surname: student1Surname,
                score: [student1Score1, student1Score2, student1Score3],
            },
            {
                name: student2Name,
                surname: student2Surname,
                score: [student2Score1, student2Score2, student2Score3],
            },
        ],
    },
] = obj.arr;

console.log(item1Level1, item1Level2, item1Level3)
console.log(item2Level1, item2Level2, item2Level3)

console.log(student1Name, student1Surname)
console.log(student1Score1, student1Score2, student1Score3)

console.log(student2Name, student2Surname)
console.log(student2Score1, student2Score2, student2Score3)
