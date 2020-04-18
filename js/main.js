var mySwiper = new Swiper ('.swiper-container', {

    direction: 'horizontal',
    loop: true,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  });

const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.menu');
menuButton.addEventListener('click', function () {
  menu.classList.toggle('menu-active');
  menuButton.classList.toggle('menu-button-active');
});