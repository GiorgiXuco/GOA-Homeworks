let count = 0;
const counterElement = document.getElementById("counter");

function updateCounter() {
    counterElement.textContent = count;
}

function increase() {
    count++;
    updateCounter();
}

function decrease() {
    count--;
    updateCounter();
}

function reset() {
    count = 0;
    updateCounter();
}