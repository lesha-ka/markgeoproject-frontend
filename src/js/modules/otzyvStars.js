
const init = () => {
  // sumStars - число звезд рейтинга у отзыва
  var sumStars = 5;
  for (var i = 0; i < sumStars; i++ ) {
    $('.js-otzyv-stars').append('<img src="images/main/otzyv/star.svg" alt="" class="home-otzyv-content-item-stars-star" />');
  }

}

export default {
	init
};