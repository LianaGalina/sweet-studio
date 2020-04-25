const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.menu');
menuButton.addEventListener('click', function () {
   menu.classList.toggle('menu-active');
   menuButton.classList.toggle('menu-button-active')
});
$(document).ready(function () {
   $(".menu").on("click", "a", function (event) {
      event.preventDefault();
      const id = $(this).attr('href'),
         top = $(id).offset().top;
      $('body,html').animate({
         scrollTop: top
      }, 1500)
   })
});
const mySwiper = new Swiper('.swiper-container', {
   direction: 'horizontal',
   loop: !0,
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
})

const bonusText = document.querySelector('.bonus-text'),
   bonusImg = document.querySelector('.bonus-img');

bonusImg.addEventListener('click', () => {
   bonusText.style.display = 'block';
});