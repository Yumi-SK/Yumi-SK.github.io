var mySwiper = new Swiper ('.swiper-container', {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 10,
  centeredSlides : true,
  autoplay :true,
  speed: 3000,
  breakpoints: {
    767: {
      slidesPerView: 1,
      spaceBetween: 0
    }
  }
})