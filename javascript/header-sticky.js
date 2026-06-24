const header = document.querySelector('.welcome header');
const welcome = document.querySelector('.welcome');
const container = document.querySelector('.container');

const STICKY_TOP_OFFSET = 16;

let stickPoint = 0;

function getHeaderStickyLeft() {
  if (!header || !container) return 0;

  const containerRect = container.getBoundingClientRect();
  return containerRect.left + (containerRect.width - header.offsetWidth) / 2;
}

function recalculateStickPoint() {
  if (!header || !welcome) return;

  const wasSticky = header.classList.contains('is-sticky');

  header.classList.remove('is-sticky');
  header.style.removeProperty('--sticky-left');

  stickPoint = header.getBoundingClientRect().top + window.scrollY - STICKY_TOP_OFFSET;

  if (wasSticky) {
    updateHeaderSticky();
  }
}

function updateHeaderSticky() {
  if (!header) return;

  if (window.scrollY >= stickPoint) {
    header.style.setProperty('--sticky-left', `${getHeaderStickyLeft()}px`);
    header.classList.add('is-sticky');
  } else {
    header.classList.remove('is-sticky');
    header.style.removeProperty('--sticky-left');
  }
}

window.addEventListener('scroll', updateHeaderSticky, { passive: true });
window.addEventListener('resize', () => {
  recalculateStickPoint();
  updateHeaderSticky();
});

recalculateStickPoint();
updateHeaderSticky();
