(function ($) {
    "use strict";

    // wow js
    new WOW().init();

    // counter up
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    })

    // =====================testimonial carousel=================
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav: false,
        responsive: {
            0: {
                items:1

            },
            768: {
                items: 2

            },
            992: {
                items: 3
            }

        }
    })

    // back top

    $(window).scroll(function () {
        if ($(this).scrollTop() > 300){
            $('back-to-top').fadeIn('slow');
        }else {
            $('.backto-to-top').fadeOut('slow');
        }
    });
    
    $('.back-top').click(function () {
        $('html, body').animated({scrollTop: 0}, 1500, 'easeInOutExpo')
        return false;
    })


})(jQuery);