$(function(){
  $('.slider__wrapper').slick({
    prevArrow: '<button type="button" class="slider__arrow-left"></button>',
    nextArrow: '<button type="button" class="slider__arrow-right"></button>',
    fade: true, 
    // autoplay: true,
    // autoplaySpeed: 5000
  });

  $(".star").rateYo({
    starWidth: "16px",
    normalFill: "#A0A0A0",
    ratedFill: "#E74C3C",
    readOnly: true
  });

  var mixer = mixitup ('.top-products__inner');
});