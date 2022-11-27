let offset = 150;
let scrollUp = document.querySelector('.scroll-up');
let scrollUpSvgPath = document.querySelector('.scroll-up__svg-path');
let pathLength = scrollUpSvgPath.getTotalLength();
scrollUpSvgPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
scrollUpSvgPath.style.transition = 'stroke-dashoffset 20ms';
let getTop = () => window.pageYOffset || document.documentElement.scrollTop;

// ---- ---- updateDashoffset ---- ---- //
let updateDashoffset = () => {
  let height = document.documentElement.scrollHeight - window.innerHeight;
  let dashoffset = pathLength - (getTop() * pathLength) / height;

  scrollUpSvgPath.style.strokeDashoffset = dashoffset;
};

// ---- ---- onScroll ---- ---- //
window.addEventListener('scroll', () => {
  updateDashoffset();
  if (getTop() > offset) {
    scrollUp.classList.add('scroll-up--active');
  } else {
    scrollUp.classList.remove('scroll-up--active');
  }
});

// ---- ---- click ---- ---- //
scrollUp.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
