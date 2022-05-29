!(function($) {
    "use strict";
    var owl = $('.quotes-carousel');
    owl.owlCarousel({
        items:1,
        loop: true,
        marging:10,
        dots:true,
        autoplay:true,
        autoplayTimeout: 1000,
        autoplayHoverPause:true
    });

    $('.play').on('click', function(){
        owl.trigger('play.owl.autoplay', [1000])
    })

    $('.stop').on('click',function(){
        owl.trigger('stop.owl.autoplay')
    })

})(jQuery);