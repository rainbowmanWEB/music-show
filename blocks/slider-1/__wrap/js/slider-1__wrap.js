document.addEventListener('DOMContentLoaded', function(e) {
    let owl = $('.slider-1__wrap');
    let $sliderNow = document.querySelector('.slider-1__slider-count-now');
    let $sliderAll = document.querySelector('.slider-1__slider-count-all');
    let $sliderElems = document.querySelectorAll('.slider-1__elem');
    console.log($sliderElems);
    $sliderAll.innerHTML = $sliderElems.length < 9 ? "0" + $sliderElems.length : $sliderElems.length;


	owl.owlCarousel({
    loop:false,
    margin:0,
    nav:true,
    dots: false,
    responsive:{
        0:{
            items:1
        },
    }
	});

    owl.on('changed.owl.carousel', (event) => {
        let sliderNowNumber = event.item.index < 9 ? "0" + (event.item.index + 1) : (event.item.index + 1);
        $sliderNow.innerHTML = sliderNowNumber;
        console.log(event.item.index);
    })
    
});