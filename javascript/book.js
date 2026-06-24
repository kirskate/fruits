const bookImages = document.querySelectorAll('.img__section img');
const bookCircles = document.querySelectorAll('.book .circle');

if (bookImages.length && bookCircles.length) {
  let currentBookPage = 0;

  function showBookPage(index) {
    bookImages[currentBookPage].classList.remove('active');
    bookCircles[currentBookPage].classList.remove('active');

    currentBookPage = index;

    bookImages[currentBookPage].classList.add('active');
    bookCircles[currentBookPage].classList.add('active');
  }

  function nextBookPage() {
    const nextIndex = (currentBookPage + 1) % bookImages.length;
    showBookPage(nextIndex);
  }

  bookImages[0].classList.add('active');
  bookCircles[0].classList.add('active');

  bookCircles.forEach((circle, index) => {
    circle.addEventListener('click', () => {
      showBookPage(index);
    });
  });

  setInterval(nextBookPage, 5000);
}
