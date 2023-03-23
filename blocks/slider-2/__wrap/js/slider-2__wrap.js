document.addEventListener('DOMContentLoaded', function(e) {
    let owl = $('.slider-2__wrap');

	owl.owlCarousel({
    loop: true,
    margin:0,
    nav: true,
    dots: false,
    responsive:{
        0:{
            items:1
        },
    }
	});
    
});