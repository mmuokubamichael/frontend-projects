var swiper = new Swiper(".mySwiper", {
    
  grabCursor:true,
  loop: true,
  slidesPerView: 1,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
    
  });
var swiper = new Swiper(".mySwiperElectronicsBrands", {
    
  grabCursor:true,
  loop: true,
  spaceBetween:20,
 

  pagination: {
    el: ".swiper-pagination-electronics",
    clickable: true,
  },
  
  breakpoints:{
    0:{
      slidesPerView: 1,
    },
    768:{
      slidesPerView: 2,
    },
    800:{
      slidesPerView: 3,
    }
  }

  // And if we need scrollbar
    
  });