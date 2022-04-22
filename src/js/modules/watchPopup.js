const init = () => {
  $('.popup-contacts-closer').on('click', function(){
    $('.popup-contacts').hide();
  });
  $('.js-popup-contacts-watch').on('click', function () {
  	$('.popup-contacts').show();
  });
};

export default {
  init
};
