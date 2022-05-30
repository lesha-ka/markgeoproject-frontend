
const init = () => {
  var faqPoint = $('.home-faq-content-item ');

  faqPoint.on('click', function(){
    if ( $(this).hasClass('is-active') ){
      faqPoint.removeClass('is-active');
      $(this).removeClass('is-active');
    } else {
      faqPoint.removeClass('is-active');
      $(this).addClass('is-active');
    }
  });

  //geological interactive
  var geoPoint = $('.home-section-flex-right-table-text-item');
  geoPoint.on('click', function () {
    geoPoint.removeClass('is-active');
    $(this).addClass('is-active');

    if (geoPoint.last().hasClass('is-active')) {
      $('.home-section-flex-right-table-img').addClass('short');
    } else {
      $('.home-section-flex-right-table-img').removeClass('short');
    }
  });
}

export default {
	init
};