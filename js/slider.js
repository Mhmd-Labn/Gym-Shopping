let currentSlide = 0;
const slider = document.getElementById('slider');
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    if (index < 0) {
        currentSlide = totalSlides - 1;
    } else if (index >= totalSlides) {
        currentSlide = 0;
    } else {
        currentSlide = index;
    }

    const newPosition = -currentSlide * 100 + '%';
    slider.style.transform = 'translateX(' + newPosition + ')';
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// Auto-play the slider every 3 seconds
setInterval(nextSlide, 3000);

// Event listeners for navigation
document.addEventListener('DOMContentLoaded', showSlide(currentSlide));
document.getElementById('nextBtn').addEventListener('click', nextSlide);
document.getElementById('prevBtn').addEventListener('click', prevSlide);
/////////////////////////////////////