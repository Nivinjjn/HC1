let currentIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = (i === index) ? 'block' : 'none';
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

setInterval(nextSlide, 3000); // Change slide every 3 seconds
showSlide(currentIndex); // Show the first slide initially