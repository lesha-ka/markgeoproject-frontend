
const init = () => {
  var infoPoint = $('.js-map-active');

  infoPoint.on('click', function(){
    if ( $(this).children().hasClass('is-active') ){
      infoPoint.children().removeClass('is-active');
      $(this).children().removeClass('is-active');
    } else {
      infoPoint.children().removeClass('is-active');
      $(this).children().addClass('is-active');
    }
  });
}

export default {
	init
};