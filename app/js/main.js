$(function(){
  $('.main-slider__wrapper').slick({
    prevArrow: '<button type="button" class="main-slider__arrow-left"><svg width="20" height="32" viewBox="0 0 20 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.03821 17.0149L17.0515 31.6079C17.577 32.1307 18.4292 32.1307 18.9546 31.6079C19.4801 31.0851 19.4801 30.2369 18.9546 29.7141L3.9069 16L18.9533 2.2859C19.4788 1.76309 19.4788 0.914839 18.9533 0.392073C18.4278 -0.130695 17.5756 -0.130695 17.0502 0.392072L1.03687 14.9851C0.756805 15.2638 0.63673 15.6332 0.655437 15.9986C0.638023 16.3654 0.75806 16.7348 1.03821 17.0149Z" fill="#505050"/></svg></button>',
    nextArrow: '<button type="button" class="main-slider__arrow-right"><svg width="20" height="32" viewBox="0 0 20 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.9641 14.9851L2.95082 0.392105C2.42535 -0.130702 1.57314 -0.130702 1.04767 0.392105C0.522196 0.914872 0.522196 1.76312 1.04767 2.28593L16.0954 16L1.049 29.7141C0.523529 30.2369 0.523529 31.0852 1.049 31.6079C1.57448 32.1307 2.42668 32.1307 2.95212 31.6079L18.9654 17.0149C19.2455 16.7362 19.3656 16.3668 19.3469 16.0014C19.3643 15.6346 19.2443 15.2652 18.9641 14.9851Z" fill="#505050"/></svg></button>',
    fade: true, 
    // autoplay: true,
    // autoplaySpeed: 5000,
    responsive: [
	    {
        breakpoint: 1200,
        settings: {
        arrows: false,
        dots: true
	      }
	    }]
  });

  $('.brands__list').slick({
    infinite: true,
    dots: true,
    arrows: false,
    slidesToShow: 8,
    slidesToScroll: 1,
    responsive: [
	    {
	      breakpoint: 768,
	      settings: {
	      slidesToShow: 4,
	      }
	    },
	    {
	      breakpoint: 568,
	      settings: {
	      slidesToShow: 2,
	      }
	    }
    ]
  });

  $('.burger, .nav-list').on('click', function(){
    $('.nav-list, .burger, body').toggleClass('active');
    $('body').toggleClass('lock');
  });

  $('.search, .header__form').on('click', function(){
    $('.search, .header__form').toggleClass('active');
  });


  $(".star").rateYo({
    starWidth: "16px",
    normalFill: "#A0A0A0",
    ratedFill: "#E74C3C",
    readOnly: true
  });


  var containerEl1 = document.querySelector('[data-ref="container-1"]');
  var containerEl2 = document.querySelector('[data-ref="container-2"]');
 
  var config = {
    controls: {
      scope: 'local'
    }
  };
 
  var mixer1 = mixitup(containerEl1, config);
  var mixer2 = mixitup(containerEl2, config);

 });