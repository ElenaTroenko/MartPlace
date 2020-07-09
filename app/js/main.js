$(function(){

  $('.product-slider__images').slick({
    variableWidth: true,
    slidesToShow: 1,
    
  });

  $('.release-products__menu-btn').on('click', function () {
    $('.release-products__menu-list').slideToggle();
  });
  
});

