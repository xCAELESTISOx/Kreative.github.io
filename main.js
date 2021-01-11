$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:40,
    dots: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})
});

$(window).bind('scroll',function(e){
    parallaxScroll();
});
 
function parallaxScroll(){
    var scrolled = $(window).scrollTop();
    $('.parallax-img').css('top',(0-(scrolled*.3))+'px');
}