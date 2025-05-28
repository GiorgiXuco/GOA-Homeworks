// შექმენით ცვლადი სადაც მომხმარებელი შემოიყვანს საათს, თქვენი დავალებაა გაიგოთ ეს საათი რომელ დღის მონაკვეთს ეკუთვნის(დილა,შუადღე,საღამო,ღამე)

let time = prompt("enter time: ")

switch(time) {
    case 6 || 7 || 8 || 9 || 10 || 11 || 12:
        console.log("დილა")
        break
    case 13 || 14 || 15 || 16 || 17 || 18:
        console.log("შუადღე")
        break
    case 19 || 20 || 21:
        console.log("საღამო")
        break
    case 22 || 23 || 24 || 1 || 2 || 3 || 4 || 5:
        console.log("ღამე")
        break
    default:
        console.log("ასეთი დრო არ არსებობს")
}