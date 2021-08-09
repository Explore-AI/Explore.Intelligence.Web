(function ($) {
	'use strict';
 $('.toggle-menu').click(function() {
     $(this).toggleClass("active");
     $('.head-menu').slideToggle();
      $('body').toggleClass("scroll-hide");
  });
  
   $('.head-menu li .dropdown-menu-icon').click(function() {
	if( $(this).hasClass('active')) {
       $('.head-menu li .dropdown-menu-icon').removeClass("active");
		  $('.head-menu li .sub-menu').slideUp();
	  }else{
		$('.head-menu li .dropdown-menu-icon').removeClass("active");
	   $(this).addClass("active");
	   jQuery('.head-menu li .sub-menu').slideUp();
	   $(this).next().slideToggle();
	}
	});
		
}(jQuery));