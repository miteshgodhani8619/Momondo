jQuery(document).ready(function(){


  
  
  $('.owl-carousel').owlCarousel({
    loop:true,
    items:2,
    dots:true,
    dotsEach:true,
    pagination:true,
    paginationSpeed: 300,
    rewindSpeed: 400,
    autoplay: true,
    autoplayTimeout: 2500,
    responsive : {
      // breakpoint from 0 up
      0 : {

        items:1,
        dots:true,
        margin:15,
        touchDrag:true
        
      },
      // breakpoint from 768 up
      575 : {
          margin:15,
          items:2,
          dots:true,
          touchDrag:true
        
      }
 
    }

  })

});












   
  
