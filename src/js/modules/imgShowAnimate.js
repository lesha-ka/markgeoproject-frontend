const init = () => {
  function whowTopImg() {
    $('.js-img-show').each(function () {
      var imagePos = $(this).offset().top;
      var windowHeight = $(window).height();
      if ( windowHeight > imagePos ){
        $(this).addClass("show");
      }
    });
  }

  $(document).ready(function(){
	  setTimeout(whowTopImg, 1000);
  });

  $(window).scroll(function() {
    $('.js-img-show').each(function () {
        var imagePos = $(this).offset().top;
        var windowHeight = $(window).height();
        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + windowHeight - 200) {
            $(this).addClass("show");
        }
      });
  });
  // right version
  function whowTopImgRight() {
    $('.js-img-show-right').each(function () {
      var imagePos = $(this).offset().top;
      var windowHeight = $(window).height();
      if ( windowHeight > imagePos ){
        $(this).addClass("show");
      }
    });
  }

  $(document).ready(function(){
    setTimeout(whowTopImgRight, 1000);
  });

  $(window).scroll(function() {
    $('.js-img-show-right').each(function () {
        var imagePos = $(this).offset().top;
        var windowHeight = $(window).height();
        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + windowHeight - 200) {
          $(this).addClass("show");
        }
      });
  });

}

export default {
	init
};