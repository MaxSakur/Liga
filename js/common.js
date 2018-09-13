$(document).ready(function(){
  
  var scrollTop = 0;
  $(window).scroll(function(){
    scrollTop = $(window).scrollTop();
    $('.counter').html(scrollTop);
    
    if (scrollTop >= 100) {
      $('#menu').addClass('scrolled-nav');
    } else if (scrollTop < 100) {
      $('#menu').removeClass('scrolled-nav');
    } 
    
  }); 

  AOS.init();

  var owl = $('.owl-carousel');
owl.owlCarousel({
    loop:true,
    nav:true,
    lazyLoad:true,
    // margin: 250,
    items:3
});
owl.on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY>0) {
        owl.trigger('next.owl');
    } else {
        owl.trigger('prev.owl');
    }
    e.preventDefault();
});
  

  
});