$(document).ready(function() {


    var owl = $('.quotes-carousel');
    owl.owlCarousel({
        items: 1,
        loop: true,
        marging:10,
        dots:true,
        autoplay:true,
        autoplayTimeout: 7000,
        autoplayHoverPause:true
    });

    $('.play').on('click', function(){
        owl.trigger('play.owl.autoplay', [7000])
    })

    $('.stop').on('click',function(){
        owl.trigger('stop.owl.autoplay')
    })

})