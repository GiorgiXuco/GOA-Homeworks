// 3) საიტზე დაამატეთ ერთი ფოტო. მასზე დაჭერის შედეგად უნდა იცვლებოდეს იგი მეორე ფოტოთი, ხოლო მეორე ფოტოზე მაუსის გადატარების შემთხვევაში ისიც უნდა ჩანაცვლდეს ამჯერად კიდევ განსხვავებული მესამე ფოტოთი. მესამე ფოტოზე კიდევ ერთხელ დაჭერა უნდა იწევევდეს თავდაპირველი ფოტოს დაბრუნებას;

let image = document.getElementById("image");
        let state = 1; 

        image.addEventListener("click", function() {
            if (state === 1) {
                image.src = "/level 80/homework/images/download (2).jpg";
                state = 2;
            } else if (state === 3) {
                image.src = "/level 80/homework/images/download (3).jpg"; 
                state = 1;
            }
        });

        image.addEventListener("mouseover", function() {
            if (state === 2) {
                image.src = "/level 80/homework/images/download (1).jpg";
                state = 3;
            }
        });