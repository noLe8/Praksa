var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 0,  
  loop: true,
  initialSlide: 0,
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
  },
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
});



document.addEventListener('DOMContentLoaded', function () {
  var swiper;

  function initSwiper() {
    if (window.innerWidth <= 768) {
      if (swiper) swiper.destroy(); 

      swiper = new Swiper('.mySwiper2', {
        slidesPerView: 1, 
        spaceBetween: 0,
        loop: false,
        centeredSlides: true,
        initialSlide: 0,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        }
      });
    } else {
      if (swiper) swiper.destroy(); 

      swiper = new Swiper('.mySwiper2', {
        slidesPerView: 3, 
        spaceBetween: 10,
        loop: false,
        centeredSlides: true,
        initialSlide: 1,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        }
      });
    }
  }

  initSwiper();

  window.addEventListener('resize', function() {
    initSwiper();
  });
});









