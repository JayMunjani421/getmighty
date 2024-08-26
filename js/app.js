$(document).ready(function () {
  $('.slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  });
  
});