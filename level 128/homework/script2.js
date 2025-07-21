// 2️⃣ შექმენი Promise, რომელიც აბრუნებს რიცხვს (მაგ. 2). შემდეგი then()-ებში გაამრავლე ეს რიცხვი ჯერ 2-ზე, შემდეგ მიღებული შედეგი 3-ზე, შემდეგ 4-ზე. ბოლო then()-ში დაბეჭდე საბოლოო შედეგი



const promise = new Promise((resolve) => {
    resolve(2);
});

promise
    .then((num) => {
        return num * 2;
    })
    .then((num) => {
        return num * 3;
    })
    .then((num) => {
        return num * 4; 
    })
    .then((result) => {
        console.log("Final result:", result);
    });
