// შექმენით 3 პრომისი, პირველი პრომისი დაარეზოლვებს მომხმარებლის ინფორმაციას ობიექტის სახით, მეორე პრომისი დააბრუნებს მომხმარებლის პოსტებს( [ { postName, PostImage },  { postName, PostImage } ,  { postName, PostImage } ]), მესამე პრომისმა დაარეზოლვოს მომხმარებლის მეგობრები, ეგეც ლისტის სახით, თითოეული მეგობარი იქნება ობიექტი. თითოეულ პრომის ქონდეს შესრულების სხვადასხვა დრო. ეს სამივე პრომისი გაუშვით პარალელურად. საბოლოოდ გადაუარეთ დიდი პრომისის სიას და დაბეჭდეთ ეს ყველა ინფორმაცია

const getUserInfo = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            id: 1,
            name: "გიორგი",
            email: "giorgi@example.com"
        });
    }, 1000);
})


const getUserPosts = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([
            { postName: "ჩემი პირველი პოსტი", postImage: "image1.jpg" },
            { postName: "საოცარი მოგზაურობა", postImage: "image2.jpg" },
            { postName: "კოდინგის თავგადასავალი", postImage: "image3.jpg" }
        ])
    }, 2000)
})


const getUserFriends = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([
            { id: 2, name: "ნიკა" },
            { id: 3, name: "მარიამი" },
            { id: 4, name: "ანა" }
        ]);
    }, 1500)
})

Promise.all([getUserInfo, getUserPosts, getUserFriends])
    .then(([userInfo, userPosts, userFriends]) => {
        console.log("მომხმარებლის ინფორმაცია:", userInfo)
        console.log("მომხმარებლის პოსტები:", userPosts)
        console.log("მომხმარებლის მეგობრები:", userFriends)
    })
    .catch(error => {
        console.error("დაფიქსირდა შეცდომა:", error)
    })
