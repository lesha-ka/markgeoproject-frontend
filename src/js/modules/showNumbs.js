const init = () => {
	var numbAnim;
	var numbStop;
  $(window).scroll(function () {
	if ($('.js-numb-show').length) {
		var numbPos = $('.js-numb-show').offset().top;
		var windowHeight = $(window).height();
		var topOfWindow = $(window).scrollTop();
		if (numbPos < topOfWindow + windowHeight - 200 && numbStop != 2) {
			numbStart();
		}
	}
  });
	function numbStart() {
		numbStop = 2;
		var time = 1;
		$('.js-numb-show-item span').each(function () {
			var i = 1,
				num = $(this).data('num'),
				step = 1000 * time / num,
				that = $(this),
				int = setInterval(function () {
					if (i <= num) {
						that.html(i);
					} else {
						clearInterval(int);
					}
					i++;
				}, step);
		});
	}
}

export default {
	init
};