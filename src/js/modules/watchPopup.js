const init = () => {
  $('.popup-contacts-closer').on('click', function(){
    $('.popup-contacts').fadeOut();
  });
  $('.js-popup-contacts-watch').on('click', function () {
  	$('.popup-contacts').fadeIn();
  });
};

export default {
  init
};
