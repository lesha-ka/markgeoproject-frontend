
const init = () => {
  // sumStars - число звезд рейтинга у отзыва
  var sumStars = 5;
  for (var i = 0; i < sumStars; i++ ) {
    $('.js-otzyv-stars').append('<img src="images/main/otzyv/star.svg" alt="" class="home-otzyv-content-item-stars-star" />');
  }

  // ограничение длинны отзыва
  // function hideOtzyvText(){
  //   $('.js-otzyv-text').text($('.js-otzyv-text').text().replace(/(\n|\r|\f)/g, ' '));
  //   $('.js-otzyv-text').html($('.js-otzyv-text').text().replace(/(.{310}).{0,}/, '$1... <a href="#" class="home-otzyv-content-item-text-more">Читать&nbsp;полностью</a>'));
  // };
  // hideOtzyvText();

}

export default {
	init
};