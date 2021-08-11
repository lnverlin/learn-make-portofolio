const menuToggle = document.querySelector('.hamburger');
const drawer = document.querySelector('.menu__container');
const content = document.querySelector('.main__content');
const nav = document.querySelector('.menu__container');

menuToggle.addEventListener('click', (event) => {
  event.stopPropagation();
  nav.classList.toggle('open');
});

drawer.addEventListener('click', (event) => {
  event.stopPropagation();
  nav.classList.remove('open');
});

content.addEventListener('click', (event) => {
  event.stopPropagation();
  nav.classList.remove('open');
});
