let audios = ["./audios/crash.mp3", "./audios/kick-bass.mp3", "./audios/snare.mp3", "./audios/tom-1.mp3", "./audios/tom-2.mp3", "./audios/tom-3.mp3", "./audios/tom-4.mp3",]
let instruments = document.querySelectorAll(".img-cont")
document.addEventListener("keyup", function (e) {

})

document.addEventListener("keydown", function (e) {
    if (e.key == "w") {
        let sec1 = new Audio(audios[0])
        sec1.play()
    } else if (e.key == "a") {
        let sec1 = new Audio(audios[1])
        sec1.play()
    } else if (e.key == "s") {
        let sec1 = new Audio(audios[2])
        sec1.play()
    } else if (e.key == "d") {
        let sec1 = new Audio(audios[3])
        sec1.play()
    } else if (e.key == "j") {
        let sec1 = new Audio(audios[4])
        sec1.play()
    } else if (e.key == "k") {
        let sec1 = new Audio(audios[5])
        sec1.play()
    } else if (e.key == "l") {
        let sec1 = new Audio(audios[6])
        sec1.play()
    }
})
