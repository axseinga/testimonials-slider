const slides = document.querySelectorAll(".slide");
const btnPrev = document.querySelector(".slide__btn--prev");
const btnNext = document.querySelector(".slide__btn--next");

let currentSlide = 0;

const init = (n) => {
  slides.forEach((slide) => (slide.style.display = "none"));
  slides[n].style.display = "block";
};

const next = () => {
  currentSlide >= slides.length - 1 ? (currentSlide = 0) : currentSlide++;
  init(currentSlide);
};

const prev = () => {
  currentSlide <= 0 ? (currentSlide = slides.length - 1) : currentSlide--;
  init(currentSlide);
};

btnPrev.addEventListener("click", prev);
btnNext.addEventListener("click", next);
