// Jquery for FIXED navbar
$(document).ready(function() { 
var introHeight = $('.intro').height()

$(window).scroll(function() {
	if(($(this).scrollTop() > introHeight) && ($(this).width() > 769 )) {
		$('nav').addClass('fixed-navbar')
		// $('nav').removeClass('navbar-static')

	} else {
		$('nav').removeClass('fixed-navbar')
		// $('nav').addClass('navbar-static')

	}
})

//=======================================================================================
// adding the ACTIVE CLASS to nav items

$(window).scrollTop(function() { 
	if($(this).scrollTop() > introHeight) {
		$('.nav li a:first-child').addClass('active-nav')
	}
})


//closing the JQuery 
})