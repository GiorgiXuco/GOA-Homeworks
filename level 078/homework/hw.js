const currentSlide = 0

const slides = document.querySelectorAll('.slide')
const totalSlides = slides.length

function updateSlide() {
    const slider = document.querySelector('.slider')
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides
    updateSlide()
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides
    updateSlide()
}

