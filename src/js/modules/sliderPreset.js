import $ from 'jquery'
import 'slick-carousel'


const init = () => {
  // header-slider start
  var slider = $('.home-header .slider');
  var progressBar = $('.home-header .progress');
  var progressBarLabel = $( '.home-header .slider__label' );
  var progressLast = $('.home-header .progress-last');
  progressBar
      .css('background-size', 20 + '% 100%')
      .attr('aria-valuenow', 20 );
  
  slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {   
    var calc = ( (nextSlide) / (slick.slideCount-1) ) * 100 + 20;
    progressBar
      .css('background-size', calc + '% 100%')
      .attr('aria-valuenow', calc );
  });
  
  slider.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 800,
    dots: false,
    arrows : false
  });  

  $('.home-header .home-slider-btn-next').on('click', function() {
    $('.home-header .slider').slick('slickNext');
  });
  $('.home-header .home-slider-btn-prev').on('click', function() {
    $('.home-header .slider').slick('slickPrev');
  });

  var quantitySlides = $(".home-header .slider").slick("getSlick").slideCount

  var sliderNav = function(event, slick, currentSlide, nextSlide) { 
    if (quantitySlides < 10) {
      progressLast.text('0' + quantitySlides);
    } else {
      progressLast.text(quantitySlides);
    }
  };
  sliderNav();
  // header-slider end


  // company-slider start
  var sliderCompany = $('.home-company .slider');
  var progressBarCompany = $('.home-company .progress');
  var progressBarLabelCompany = $( '.home-company .slider__label' );
  var progressLastCompany = $('.home-company .progress-last');
  progressBarCompany
      .css('background-size', 20 + '% 100%')
      .attr('aria-valuenow', 20 );
  
  slider.on('beforeChangeCompany', function(event, slick, currentSlide, nextSlide) {   
    var calc = ( (nextSlide) / (slick.slideCount-1) ) * 100 + 20;
    progressBarCompany
      .css('background-size', calc + '% 100%')
      .attr('aria-valuenow', calc );
  });
  
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

  var quantitySlidesCompany = $(".home-company .slider").slick("getSlick").slideCount

  var sliderNavCompany = function(event, slick, currentSlide, nextSlide) { 
    if (quantitySlides < 10) {
      progressLastCompany.text('0' + quantitySlidesCompany);
    } else {
      progressLastCompany.text(quantitySlidesCompany);
    }
  };
  sliderNavCompany();
  // company-slider end


  // otzyv-slider start
  var sliderOtzyv = $('.home-otzyv .slider');
  
  sliderOtzyv.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
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
        infinite: false,
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
  progressBarStep
      .css('background-size', 20 + '% 100%')
      .attr('aria-valuenow', 20 );
  
  sliderStep.on('beforeChange', function(event, slick, currentSlide, nextSlide) {   
    var calc = ( (nextSlide) / (slick.slideCount-1) ) * 100 + 20;
    progressBarStep
      .css('background-size', calc + '% 100%')
      .attr('aria-valuenow', calc );
  });
  
  sliderStep.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 800,
    dots: false,
    arrows : false
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

  

  var quantitySlidesStep = $(".step-work .slider").slick("getSlick").slideCount

  var sliderNav = function(event, slick, currentSlide, nextSlide) { 
    if (quantitySlidesStep < 10) {
      progressLastStep.text('0' + quantitySlidesStep);
    } else {
      progressLastStep.text(quantitySlidesStep);
    }
  };
  sliderNav();


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
  var sliderArticleNews = $('.news-article-slider');
  
  sliderArticleNews.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 800,
    dots: false,
    infinite: false,
    arrows : false
  });
  $('.news-article-btn-next').on('click', function() {
    $('.news-article-header-wrapper .slider').slick('slickNext');
  });
  $('.news-article-btn-prev').on('click', function() {
    $('.news-article-header-wrapper .slider').slick('slickPrev');
  });
  // article-news-slider end
};

export default {
	init
};


