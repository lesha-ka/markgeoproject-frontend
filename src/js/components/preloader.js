const init = () => {
  if (!sessionStorage.alreadyClicked) {
  	 $('body .preloader').addClass('is-active');

  	 function hidePreloader() {
  	 	$('body .preloader').removeClass('is-active');
  	 }
  	 setTimeout(hidePreloader, 5000);
  	sessionStorage.alreadyClicked = "true";
  }
}

export default {
	init
};
