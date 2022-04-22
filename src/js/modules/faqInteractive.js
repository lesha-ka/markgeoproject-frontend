
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
}

export default {
	init
};