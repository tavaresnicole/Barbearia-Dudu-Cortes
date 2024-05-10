const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

function next1() {
  swiper[1].slideNext();
}

function previous1() {
  swiper[1].slidePrev();
}

function next() {
  swiper[0].slideNext();
}

function previous() {
  swiper[0].slidePrev();
}