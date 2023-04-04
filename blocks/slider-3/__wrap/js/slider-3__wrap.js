document.addEventListener('DOMContentLoaded', function(e) {
    let owl = $('.slider-3__wrap');

	owl.owlCarousel({
    loop: true,
    margin:0,
    nav: true,
    dots: false,
    animateIn: 'slideInUp fadeIn',
    animateOut: 'slideOutUp fadeOut',
    responsive:{
        0:{
            items:1
        },
    }
	});
    
});