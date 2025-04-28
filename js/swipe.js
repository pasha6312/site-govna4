const swiper = new Swiper('.my-swiper', {
  // Optional parameters
  direction: 'horizontal',
  centeredSlides: true,
  loop: true,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true, // разрешаем клик по буллетам
  },



  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

