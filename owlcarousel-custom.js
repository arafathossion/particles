
$('.blog-owl-carousel').owlCarousel({
    loop:true, 
    items:3, 
    center:true, 
    stagePadding:0,
    merge:true,
    startPosition:1,
    rewind:true,
    nav:false,
    dot:true,
    slideBy:1, 
    dots:true, 
    autoplay:true, 
    autoplayTimeout:2500,
    autoplayHoverPause:true,
    autoplaySpeed:true,
    animateOut: 'animate__fadeOutLeftBig',
    animateIn: 'animate__fadeInLeftBig',
    smartSpeed:450,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        991.98:{
            items:2,
        },
        1200:{
            items:3,
        },
    }
 
})


$('.testimonial').owlCarousel({
    loop:true, 
    items:2, 
    center:true, 
    stagePadding:0,
    merge:true,
    startPosition:1,
    rewind:true,
    slideBy:1,
    nav:false,
    dot:true,
    dots:true, 
    autoplay:true, 
    autoplayTimeout:2500,
    autoplayHoverPause:true,
    autoplaySpeed:true,
    animateOut: 'animate__fadeOutLeftBig',
    animateIn: 'animate__fadeInLeftBig',
    smartSpeed:450,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        991.98:{
            items:2,
        },
        1200:{
            items:3,
        },
    }
});