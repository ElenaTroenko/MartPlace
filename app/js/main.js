$(function(){

  $('.weekly-slider__images').slick({
    variableWidth: false,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    ]
  });

  $('.feedback__inner').slick({
    variableWidth: false,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: false,
    responsive: [
      {
        breakpoint: 970,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    ]

  });

  $('.newest-list__menu-btn').on('click', function () {
    $('.newest-list__menu-list').slideToggle();
  });

  $('.header__btn-nav').on('click', function () {
    $('.header__mobile-list').slideToggle();
  });

  $('.header__item-pages').on('click', function () {
    $('.header-dropdown').slideToggle();

  });

  
  $('.header__item-home').on('click', function () {
    $('.dropdown-home').slideToggle();
  });


  $('.header__item-products').on('click', function () {
    $('.dropdown-products').slideToggle();
  });


  $('.header__item-wordpress').on('click', function () {
    $('.dropdown-wordpress').slideToggle();
  });


  $('.header__icon--envelope').on('click', function () {
    $('.header-massages').slideToggle();
  });
 

  $('.header__user-name').on('click', function () {
    $('.dropdown-user').slideToggle();
  });

  $('.header__icon--alarm').on('click', function () {
    $('.dropdown-notification').slideToggle();
  });

  $('.header__icon--cart').on('click', function () {
    $('.dropdown-cart').slideToggle();
  });
  var mixer = mixitup('.newest-list__box');

  $('.goods-slider__items').slick({
    variableWidth: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 970,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    ]
  });

  $(".rate-star").rateYo({
    rating: 5,
    // readOnly: true, 
    starWidth: "15px",
    spacing: "2px"

  });




});



