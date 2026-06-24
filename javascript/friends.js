const friendsBg = document.querySelector('.friends__bg');
const friendNames = document.querySelectorAll('.friends__name');

friendNames.forEach((name) => {
  name.addEventListener('click', () => {
    friendNames.forEach((item) => item.classList.remove('active'));
    name.classList.add('active');

    const bgIndex = name.dataset.bg;
    friendsBg.src = `./assets/images/mainPage/friend-bg-${bgIndex}.svg`;
  });
});
