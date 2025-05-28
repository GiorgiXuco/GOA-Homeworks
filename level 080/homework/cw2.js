//2) საიტზე დაამატეთ 3 ფოტო, რომლებსაც გაცენტრავთ და დიზაინის მხრივ დახვეწავთ. საიტზე მოცემული სამი ფოტოდან პირველი ორის შემთხვევაში მათზე მაუსის გადატარებისას შეიცვალოს ეს ფოტოები და კურსორის გაწევის შედეგად ისევ დაუბრუნდეს თავდაპირველ ფოტოს, ხოლო მესამე ფოტო დაჭერის შედეგად ჩაანაცვლეთ სხვა ფოტოთი, ამ შემთხვევაშიც უნდა უბრუნდებოდეს საწყის ფოტოს კურსორის გაწევის შემდეგ;


let image1 = document.getElementById("image1")
        image1.addEventListener("mouseover", function() {
            image1.src = "/level 80/homework/images/download (1).jpg"
        })
        image1.addEventListener("mouseout", function() {
            image1.src = "/level 80/homework/images/download.jpg"
        })

let image2 = document.getElementById("image2")
        image2.addEventListener("mouseover", function() {
            image2.src = "/level 80/homework/images/download (2).jpg"
        })
        image2.addEventListener("mouseout", function() {
            image3.src = "/level 80/homework/images/images.jpg"
        })

let image3 = document.getElementById("image3")
        image3.addEventListener("click", function() {
            image3.src = "/level 80/homework/images/download (3).jpg"
        })


