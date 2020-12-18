var mySwiper = new Swiper('.swiper1', {
    direction: 'horizontal',
    loop: true,
    effect: 'fade',
    autoplay : {
        delay: 4000,
    },
    speed : 2000,
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination',
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  })