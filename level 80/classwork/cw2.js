//2) დაამატეთ საიტზე ფოტო, რომელზე მაუსის გადატარებისას, უნდა შეიცვალოს ეს ფოტო. მაუსის გაწევისას კი დაუბრუნდეს ისევ საწყის ფოტოს.


let image = document.getElementById("image")
        image.addEventListener("mouseover", function() {
            image.src = "/level 80/classwork/images/images.jpg"
        });
        image.addEventListener("mouseout", function() {
            image.src = "/level 80/classwork/images/download.jpg"
        });