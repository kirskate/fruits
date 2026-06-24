const slides = document.querySelectorAll('.slider__img');
const circles = document.querySelectorAll('.circle');

let currentSlide = 0;

function showSlide(index) {
  slides[currentSlide].classList.remove('active');
  circles[currentSlide].classList.remove('active');

  currentSlide = index;

  slides[currentSlide].classList.add('active');
  circles[currentSlide].classList.add('active');
}

function nextSlide() {
  const nextIndex = (currentSlide + 1) % slides.length;
  showSlide(nextIndex);
}

setInterval(nextSlide, 5000);

circles.forEach((circle, index) => {
  circle.addEventListener('click', () => {
    showSlide(index);
  });
});