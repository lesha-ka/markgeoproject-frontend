import $ from 'jquery'
import 'slick-carousel'


const init = () => {
  // header-slider start
  var slider = $('.home-header .slider');
  var sliderProgress = $('.home-slider-nav .progress');
  var progressBarLabel = $( '.home-header .slider__label' );
  var progressLast = $('.home-header .progress-last');

  sliderProgress.addClass('is-active');

  slider.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 800,
    dots: false,
    arrows : false,
    autoplay: true,
    autoplaySpeed: 8000,
  });  

  $('.home-header .home-slider-btn-next').on('click', function() {
    $('.home-header .slider').slick('slickNext');
    var curentStep = $('.home-header .slider').slick('slickCurrentSlide');
    var tureCurentStep = curentStep + 1
    $('.progress-first').text("0" + tureCurentStep);
  });
  $('.home-header .home-slider-btn-prev').on('click', function() {
    $('.home-header .slider').slick('slickPrev');
    var curentStep = $('.home-header .slider').slick('slickCurrentSlide');
    var tureCurentStep = curentStep + 1
    $('.progress-first').text("0" + tureCurentStep);
  });

  var quantitySlides = $(".home-header .slider").slick("getSlick").slideCount

  var sliderNav = function(event, slick, currentSlide, nextSlide) { 

    if (quantitySlides < 10) {
      progressLast.text('0' + quantitySlides);
    } else {
      progressLast.text(quantitySlides);
    }
  };
  // progress bar 
  slider.on('afterChange', function (event, slick, currentSlide, nextSlide) {
      sliderProgress.removeClass('is-active');
      var curentStep = $('.home-header .slider').slick('slickCurrentSlide');
      var tureCurentStep = curentStep + 1
      $('.progress-first').text("0" + tureCurentStep);
      setTimeout(function () {
        sliderProgress.addClass('is-active');
      }, 100);
      
  });
  sliderNav();
  // header-slider end


  // company-slider start
  var sliderCompany = $('.home-company-item .slider');
  
  sliderCompany.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 800,
    dots: false,
    arrows : false
  });  

  $('.home-company .home-slider-btn-next').on('click', function() {
    $('.home-company .slider').slick('slickNext');
  });
  $('.home-company .home-slider-btn-prev').on('click', function() {
    $('.home-company .slider').slick('slickPrev');
  });
  // company-slider end


  // otzyv-slider start
  var sliderOtzyv = $('.home-otzyv .slider');
  
  sliderOtzyv.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    speed: 400,
    dots: false,
    arrows : false,
  });  
  // otzyv-slider end


  // services-slider start
  var sliderServices = $('.home-proposal .slider');
  
      sliderServices.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        speed: 800,
        dots: false,
        arrows : false
      }); 
  // services-slider end


  // work-step-slider start

  var sliderStep = $('.step-work .slider');
  var progressBarStep = $('.step-work .progress');
  var progressBarLabelStep = $( '.step-work .slider__label' );
  var progressLastStep = $('.step-work .progress-last');
  
  sliderStep.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 800,
    dots: false,
    arrows : false,
    autoplay: true,
    autoplaySpeed: 8000
  });  

  $('.step-work .step-work-btn-next').on('click', function() {
    $('.step-work .slider').slick('slickNext');
    var curentStep = $('.step-work .slider').slick('slickCurrentSlide');
    var tureCurentStep = curentStep + 1
    $('.step-work-progress-first-numb').text(tureCurentStep);
  });
  $('.step-work .step-work-btn-prev').on('click', function() {
    $('.step-work .slider').slick('slickPrev');
    var curentStep = $('.step-work .slider').slick('slickCurrentSlide');
    var tureCurentStep = curentStep + 1
    $('.step-work-progress-first-numb').text(tureCurentStep);
  });
  
    sliderStep.on('afterChange', function (event, slick, currentSlide, nextSlide) {
      var curentStep = $('.step-work .slider').slick('slickCurrentSlide');
      var tureCurentStep = curentStep + 1
      $('.step-work-progress-first-numb').text(tureCurentStep);
    	setTimeout(function () {
    		progressBarStep.addClass('is-active');
        
    	}, 100);

    });
    sliderNav();

  

  var quantitySlidesStep = $(".step-work .slider").slick("getSlick").slideCount

  var sliderNav = function(event, slick, currentSlide, nextSlide) { 
    if (quantitySlidesStep < 10) {
      progressLastStep.text('0' + quantitySlidesStep);
    } else {
      progressLastStep.text(quantitySlidesStep);
    }
  };
  sliderNav();

  sliderStep.on('afterChange', function (event, slick, currentSlide, nextSlide) {
    sliderProgress.removeClass('is-active');
    setTimeout(function () {
      sliderProgress.addClass('is-active');
    }, 100);

  });

  // work-step-slider ens

  // team-slider start
  if ($(window).width() <= 1023) {
      $('#team-team').addClass('slider');
      var sliderTeam = $('.team .slider');
  
      sliderTeam.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        speed: 800,
        dots: false,
        arrows : false
      }); 
    }

  $( window ).resize(function() {
    if ($(window).width() <= 1023) {
      $('#team-team').addClass('slider');
      var sliderTeam = $('.team .slider');
  
      sliderTeam.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        speed: 800,
        dots: false,
        arrows : false
      }); 
    } else {
      $('#team-team').removeClass('slider');
    }
  });
  

  // team-slider ens


  // team-slider start
  if ($(window).width() <= 1430) {
      $('.vacancy-advantages-box-right').addClass('slider');
      var sliderVacancy = $('.vacancy-advantages-box-right.slider');
  
      sliderVacancy.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        speed: 800,
        dots: false,
        arrows : false
      }); 
    }

  $( window ).resize(function() {
    if ($(window).width() <= 1430) {
      $('.vacancy-advantages-box-right').addClass('slider');
      var sliderVacancy = $('.vacancy-advantages-box-right.slider');
  
      sliderVacancy.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 800,
        dots: false,
        infinite: false,
        arrows : false
      }); 
    } else {
      $('.vacancy-advantages-box-right').removeClass('slider');
    }
  });
  

  // team-slider ens

   // otzyv-page-slider start
  if ($(window).width() <= 1023) {
      $('#otzyv-content-flex').addClass('slider');
      var sliderVacancy = $('.otzyv-content-flex.slider');
  
      sliderVacancy.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        speed: 800,
        dots: false,
        arrows : false
      }); 
    }

  $( window ).resize(function() {
    if ($(window).width() <= 1023) {
      $('#otzyv-content-flex').addClass('slider');
      var sliderVacancy = $('.otzyv-content-flex.slider');
  
      sliderVacancy.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 800,
        dots: false,
        infinite: false,
        arrows : false
      }); 
    } else {
      $('#otzyv-content-flex').removeClass('slider');
    }
  });
  

  // team-slider end
  // article-news-slider start
  // var sliderArticleNews = $('.news-article-slider');
  
  // sliderArticleNews.slick({
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   speed: 800,
  //   dots: false,
  //   infinite: false,
  //   arrows : false
  // });
  // $('.news-article-btn-next').on('click', function() {
  //   $('.news-article .slider').slick('slickNext');
  // });
  // $('.news-article-btn-prev').on('click', function() {
  //   $('.news-article .slider').slick('slickPrev');
  // });
  // article-news-slider end


   // company-slider start
  var sliderCompanySertif = $('.company-license-box');
  $(window).on('load resize', function () {
    if ($(window).width() < 1023) {
    sliderCompanySertif.slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 800,
      dots: false,
      infinite: true,
      arrows: false
    });
  }
  });
  var sliderCompanySertifNav = $('.company-license-nav');
  $(window).on('load resize', function () {
  	if ($(window).width() < 767) {
  		sliderCompanySertifNav.slick({
  			slidesToShow: 1,
  			slidesToScroll: 1,
  			speed: 800,
  			dots: false,
  			infinite: false,
  			arrows: false
  		});
  	}
  });
   // company-slider end

  $('.home-geography-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 800,
    dots: false,
    infinite: false,
    arrows: false
  });
  $('.home-section-flex-mob').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 800,
    dots: false,
    infinite: false,
    arrows: false
  });
  $(window).on('load resize', function () {
  	if ($(window).width() < 1023) {
      $('.step-work').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 800,
        dots: false,
        infinite: false,
        arrows: false
      });
    }
  });
  $('.step-work-mob-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 800,
    dots: false,
    infinite: false,
    arrows: false,
    asNavFor: '.step-work-mob-nav'
  });
  $('.step-work-mob-nav').slick({
    asNavFor: '.step-work-mob-slider',
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 800,
    dots: false,
    infinite: false,
    arrows: false
  });
};

export default {
	init
};


