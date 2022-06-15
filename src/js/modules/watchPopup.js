const init = () => {
  $('.popup-contacts-closer').on('click', function(){
    $('.popup-contacts').fadeOut();
  });
  $('.js-popup-contacts-watch').on('click', function () {
  	$('.popup-contacts').fadeIn();
  });
  $(document).on('click', '.js-popupOpen', function(){
      let popupId = $(this).data('popup');
      let popup = $('[data-popup-number="'+popupId+'"]');
      popup.fadeIn(0);
  });
  $(document).on('click', '.js-popupClose', function(){
    let popup = $('.popup');
    popup.fadeOut(0);
  });
  $(document).ready(function(){
    if($('.js-popup').length) {
      $(document).on('keydown', function(e) {
        let popup= $('.js-popup');
        if (e.keyCode == 27)
        popup.fadeOut(0);
      });
    }
  });
};

export default {
  init
};
