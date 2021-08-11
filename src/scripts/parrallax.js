const almare = document.getElementById('almare');
const sunset = document.getElementById('sunset');
const dbd = document.getElementById('dbd');
const piroz = document.getElementById('piroz');
const kaffehuset = document.getElementById('kaffehuset');
const elchringuito = document.getElementById('elchringuito');
const contentButton = document.getElementById('content__btn');

window.addEventListener('scroll', () => {
  const value = window.scrollY;
  almare.style.top = `${-value * 0.5}px`;
  sunset.style.top = `${-value * 0.8}px`;
  dbd.style.top = `${-value * 0.7}px`;
  piroz.style.top = `${-value * 0.7}px`;
  kaffehuset.style.top = `${-value * 0.7}px`;
  elchringuito.style.top = `${-value * 0.7}px`;
  contentButton.style.top = `${-value * 0.7}px`;
});
