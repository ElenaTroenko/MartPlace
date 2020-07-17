$(function(){

  $('.weekly-slider__images').slick({
    variableWidth: false,
    slidesToShow: 2,
    slidesToScroll: 2
  });

  $('.feedback__inner').slick({
    variableWidth: false,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: false

  });

  $('.newest-list__menu-btn').on('click', function () {
    $('.newest-list__menu-list').slideToggle();
  });
  
 
  var mixer = mixitup('.newest-list__box');

  $('.goods-slider__items').slick({
    variableWidth: true,
    slidesToShow: 3,
    slidesToScroll: 3
    
  });

  $(".rate-star").rateYo({
    rating: 4.5,
    readOnly: true, 
    starWidth: "15px",
    spacing: "2px"

  });




});



