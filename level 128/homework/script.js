// 1️⃣ დაწერე სამი Promise, რომლებიც აბრუნებენ "Step 1", "Step 2", "Step 3" თითოეული 1 წამიანი დაყოვნებით. თითოეული უნდა შესრულდეს მხოლოდ მაშინ, როცა წინა დასრულდება. გამოიყენე მხოლოდ then() ჩეინინგი.


function step1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Step 1");
            resolve("Step 1");
        }, 1000);
    });
}

function step2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Step 2");
            resolve("Step 2");
        }, 1000);
    });
}

function step3() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Step 3");
            resolve("Step 3");
        }, 1000);
    });
}

step1()
    .then(() => step2())
    .then(() => step3())
    .then(() => {
        console.log("All steps done!");
    });
