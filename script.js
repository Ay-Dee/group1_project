
$(document).ready(function() {
    if ($(window).width() < 768) {
      $("#footer-menu").accordion({
        collapsible: true,
        active: false
      });
    }
  });
  
    
    if ($(window).width() < 992) {
      // If screen size is less than 992px (mobile view)
     $('footer div div ul').removeClass('show');
    } else {
      // If screen size is greater than or equal to 992px (larger screens)
      $('.collapse').addClass('show'); // Add the "show" class to all collapse elements
    }
  });