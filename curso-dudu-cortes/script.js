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
  
  function next(swiperPosition) {
  console.log(swiper);
  swiper[swiperPosition].slideNext();
}

function previous(){
    swiper[swiperPosition].slidePrev();
  }