$(document).ready(function(){
    $('.slider').slick({
        arrows: false,
        dots: true,
        adaptiveHeight:false,
        slidesToShow:1,
        infinite: true,
        speed:700,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: false,
        pauseOnFocus: false,
        pauseOnDots: false,
        dragable: false,
        swipe: false,

        appendDots: $('.dots-container'),
    });

    $('.slider-project').slick({
        arrows: true,
        dots: false,
        adaptiveHeight:false,
        slidesToShow:1,
        infinite: true,
        speed:700,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: false,
        pauseOnFocus: false,
        pauseOnDots: false,
        dragable: false,
        swipe: false,

        appendArrows: $('.slider-project__handler'),
    });

});
