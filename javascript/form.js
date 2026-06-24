const form = document.getElementById('friendForm');
const modal = document.getElementById('modal');
const modalClose = document.getElementById('modalClose');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  modal.classList.add('active');
  form.reset();
});

modalClose.addEventListener('click', function () {
  modal.classList.remove('active');
});

modal.addEventListener('click', function (event) {
  if (event.target === modal) {
    modal.classList.remove('active');
  }
});