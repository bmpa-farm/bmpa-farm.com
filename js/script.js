(function (window, document, $) {
	"use strict";
	
	$(window).on('load', function () {
		$(".noo-spinner").remove();
	});
	
	$(document).ready(function($) {
		/* about background */
		var organikAbout = $('.organik-about');
		organikAbout.each(function() {
			$(this).find('.image').css('background-color', $(this).find('.image').attr('data-bg-color'));
		});
		
		/* featured products */
		var featuredProducts = $('.organik-featured-product');
		featuredProducts.each(function() {
			if($(this).attr("data-bg-image")) $(this).css('background-image', 'url("' + $(this).attr("data-bg-image") + '")');
			if($(this).attr("data-bg-color")) $(this).css('background-color', $(this).attr('data-bg-color'));
		});

		/* carousel slider */
		owlCarousel();
		
		/* back to top */
		$('#backtotop').on('click', function() {
			$("html, body").animate({
				scrollTop: 0
			}, 800);
			return false;
		});
	});

})(window, document, jQuery);

/*=================================================================
	google map
===================================================================*/
function googleMap() {
	if ($("#googleMap").length > 0) {
		$obj = $("#googleMap");
		var myCenter = new google.maps.LatLng($obj.data("lat"), $obj.data("lon"));
		var myMaker = new google.maps.LatLng($obj.data("lat"), $obj.data("lon"));
		function initialize() {
			var mapProp = {
				center: myCenter,
				zoom: 16,
				scrollwheel: false,
				mapTypeControlOptions: {
					mapTypeIds: [ google.maps.MapTypeId.ROADMAP, "map_style" ]
				}
			};
			var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
			var marker = new google.maps.Marker({
				position: myMaker,
				icon: $obj.data("icon")
			});
			marker.setMap(map);
		}
		google.maps.event.addDomListener(window, "load", initialize);
	}
}

/*=================================================================
	owl carousel slider function
===================================================================*/
function owlCarousel(){
	if ($(".owl-carousel").length > 0) {
		$(".owl-carousel").owlCarousel({
			items: 1,
			loop: true,
			mouseDrag: false,
			navigation: false,
			dots: false,
			pagination: false,
			autoplay: true,
			autoplayTimeout: 5000,
			autoplayHoverPause: true,
			smartSpeed: 1000,
			autoplayHoverPause: true,
			navigationText: ['<i class="ion-chevron-left"></i>', '<i class="ion-chevron-right"></i>'],
			itemsDesktop: [1199, 1],
			itemsDesktopSmall: [979, 1],
			itemsTablet: [768, 1],
			itemsMobile: [479, 1],
			addClassActive: true
		});
	}
	if ($(".about-carousel").length > 0) {
		$(".about-carousel").each(function(){
			var autoplay = ($(this).attr("data-auto-play") === "true") ? true : false;
			$(this).owlCarousel({
				items: $(this).attr("data-desktop"),
				loop: true,
				mouseDrag: true,
				navigation: false,
				dots: false,
				pagination: false,
				autoPlay: autoplay,
				autoplayTimeout: 5000,
				autoplayHoverPause: true,
				smartSpeed: 1000,
				autoplayHoverPause: true,
				navigationText: ['<i class="ion-ios-arrow-thin-left"></i>', '<i class="ion-ios-arrow-thin-right"></i>'],
				itemsDesktop: [1199, $(this).attr("data-desktop")],
				itemsDesktopSmall: [979, $(this).attr("data-laptop")],
				itemsTablet: [768, $(this).attr("data-tablet")],
				itemsMobile: [479, $(this).attr("data-mobile")]
			});
		});
	}
}