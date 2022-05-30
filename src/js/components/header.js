import helpers from '../helpers';


const init = () => {
  var menu = $('.header-mob-right-menu');
  var menuImg = $('.header-mob-right-menu-img');
	var menuBox = $('.header-mob-right-menu-box');

  menu.on('click', function () {
    menu.toggleClass('is-active');
    menuImg.toggleClass('is-active');
    menuBox.fadeToggle(400);
  });
  // выпадающие блоки
  $('.header-wrapper-nav-item').hover(function () {
    $(this).find('.header-nav-bar-spot').fadeIn(400);
    $(this).addClass('is-active');
  });
  $('.header-wrapper-nav-item').mouseleave(function () {
    $(this).find('.header-nav-bar-spot').fadeOut(200);
    $(this).removeClass('is-active');
  });
  $('.js-mob-menu-show-bar').on('click', function () {
    $(this).parent().find('.header-mob-right-menu-box-wrapper-right-item-desc-wrap').fadeToggle();
  });
};



export default {
	init
};
