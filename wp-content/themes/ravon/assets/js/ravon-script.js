( function( $ ) {

	"use strict";

		onWindowResize();
		function onWindowResize() {
			
			var headerHeight = $('.site-header').outerHeight();
			if ( $( window ).width() > 991 ) {

				$(document).on( 'mouseenter', '.menu-item', function() {
					$(this).children('.sub-menu').addClass('submenu-show');
				}).on( 'mouseleave', '.menu-item', function() {
				    $(this).children('.sub-menu').removeClass('submenu-show');
				});

				$(document).on( 'mouseenter', '.page_item_has_children', function() {
					$(this).children('.children').addClass('submenu-show');
				}).on( 'mouseleave', '.page_item_has_children', function() {
				    $( this ).children('.children').fadeOut().removeClass('submenu-show');
				});
			}

			$('.full-screen').css( 'min-height', $( window ).height() - headerHeight );
		}

		$( window ).on( 'resize', function() {

			onWindowResize();
			
		});

} )( jQuery );