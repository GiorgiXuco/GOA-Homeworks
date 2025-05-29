// გამოიყენე დესტრუქცია ისე, რომ ცვლადებში მიიღო math და physics ქულები

const student = {
    name: "Luka",
    marks: {
        math: 90,
        physics: 85
    }
}

const { marks: { math, physics } } = student;

console.log(math)
console.log(physics)