//1) საიტზე დაამატეთ ტექსტი. გაუწერეთ მას Javascript-ის კოდი ისე, რომ ტექსტზე დაჭერისას შეიცვალოს იგი და ეკრანზე მის ნაცვლად გამოვიდეს ახალი წინადადება;

let myh1 = document.getElementById("myh1")

myh1.addEventListener("click", function(){
    myh1.textContent = "khutsishvili"
    myh1.style.color = "green"
})































// let img = document.getElementById("pic")

// img.addEventListener("click", function(){
//     for(let i = 0; i < 11; i++)
//         console.log(i)
// })






// myh1.addEventListener("mouseout", function(){
//     myh1.textContent = "Lesson 79"
//     myh1.style.color = "black"
// })

// myh1.addEventListener("mouseout", mouseout)