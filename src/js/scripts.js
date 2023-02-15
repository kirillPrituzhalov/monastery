$('.single-slide').slick({
	arrows: false,
	dots: true
  });


$('.multiple-items').slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
 infinite: false, 
 responsive: [
    {
      breakpoint: 650,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});