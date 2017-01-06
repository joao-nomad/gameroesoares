/*//Slicker
$('.five').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    infinite: true
});*/

var sliderNav = $('.five');
var maxItems = Math.round(sliderNav.width() / 201);


$('.five').slick({
  dots: true,
  infinite: true,
  slidesToScroll: 1,
  speed: 300,
  /*slidesToShow: 5,*/
  slidesToShow: maxItems,
  adaptiveHeight: true
});
  

$(window).resize(function(){
  $('.five').slick('unslick');

  var maxItems = Math.round(sliderNav.width() / 201);


  $('.five').slick({
    dots: true,
    infinite: true,
    slidesToScroll: 1,
    speed: 300,
    /*slidesToShow: 5,*/
    slidesToShow: maxItems,
    adaptiveHeight: true
  });
});