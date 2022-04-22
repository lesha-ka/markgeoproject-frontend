const init = () => {
  $(document).ready(function (){
    $('body').addClass('active-preloader');
    function hidePreloader() {
      $('body').removeClass('active-preloader');
    }
    setTimeout(hidePreloader, 3000);
  });
}


export default {
	init
};
