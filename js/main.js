jQuery(document).ready(function($) {
	"use strict";
	/* window */
	var window_width, window_height, scroll_top;
	
	/* admin bar */
	var adminbar = $('#wpadminbar');
	var adminbar_height = 0;
	
	/* header menu */
	var header = $('#cms-header');
	var header_top = 0;
	
	/* scroll status */
	var scroll_status = '';
	
	/**
	 * window load event.
	 * 
	 * Bind an event handler to the "load" JavaScript event.
	 * @author Fox
	 */
	$(window).load(function() {
		
		/** current scroll */
		scroll_top = $(window).scrollTop();
		
		/** current window width */
		window_width = $(window).width();
		
		/** current window height */
		window_height = $(window).height();
		
		/* get admin bar height */
		adminbar_height = adminbar.length > 0 ? adminbar.outerHeight(true) : 0 ;
		
		/* get top header menu */
		header_top = adminbar_height;
		
		/* check sticky menu. */
		if(CMSOptions.menu_sticky == '1'){
			cms_stiky_menu(scroll_top);
		}
		/* check sticky menu fixed page */
		if(CMSOptions.menu_sticky == '0'){
			cms_stiky_menu_fixed_page();
		}
		/* check mobile menu */
		cms_mobile_menu();

		/* Custom image parallax */
		cms_custom_home_image_parallax();

		/* Arrow down */
		cms_arrow_down();

		/* Add plceholder */
		cms_custom_placeholder_input();

		/* Portfolio smooth */
		cms_portfolio_smooth();

		/* Resize iframe tag */
		cms_auto_video_width();
		/* CMS html5 video */
		$('.cms_videohtml5').cms_videohtml5();

		/* CMS Search Popup */
		cms_show_popup_search();

		/* Add equal height */
		if (window_width >= 992){
			$('.cms-item-same-height .cms-same-height').equalHeights();
		}
		/* Add height for VC Tabs Content */
		if (window_width >= 768){
			$('.vc_general.vc_tta.vc_tta-style-zk-raven .vc_tta-panels-container .vc_tta-panels').equalHeights();
		}
		// apply matchHeight to each item container's items
		if (window_width >= 992){
	        $('.items-equal').each(function() {
	            $(this).children('.equal').matchHeight();
	        });
	    }
		

	});

	/**
	 * resize event.
	 * 
	 * Bind an event handler to the "resize" JavaScript event, or trigger that event on an element.
	 * @author Fox
	 */
	$(window).resize(function(event, ui) {
		/** current window width */
		window_width = $(event.target).width();
		
		/** current window height */
		window_height = $(window).height();
		
		/** current scroll */
		scroll_top = $(window).scrollTop();
		
		/* check sticky menu. */
		if(CMSOptions.menu_sticky == '1'){
			cms_stiky_menu(scroll_top);
		}
		
		/* check mobile menu */
		cms_mobile_menu();

		/* Custom image parallax */
		cms_custom_home_image_parallax();

		/* Resize iframe tag */
		cms_auto_video_width();
		/* CMS html5 video */
		$('.cms_videohtml5').cms_videohtml5();

		/* Resize equal height */
		if (window_width >= 992){
			$('.cms-item-same-height .cms-same-height').equalHeights();
		}
		/* Add height for VC Tabs Content */
		if (window_width >= 768){
			$('.vc_general.vc_tta.vc_tta-style-zk-raven .vc_tta-panels-container .vc_tta-panels').equalHeights();
		}
		// apply matchHeight to each item container's items
		if (window_width >= 992){
	        $('.items-equal').each(function() {
	            $(this).children('.equal').matchHeight();
	        });
	    }

	    // auto-initialize plugin
	    if (window_width >= 768){
		    $('[data-equal]').each(function(){
		        var $this = $(this),
		            target = $this.data('equal');
		            $this.imagesLoaded(function(){
		            	$this.find(target).equalHeights();
		            });
		    });
		}

	});
	
	/**
	 * scroll event.
	 * 
	 * Bind an event handler to the "scroll" JavaScript event, or trigger that event on an element.
	 * @author Fox
	 */
	var lastScrollTop = 0;
	
	$(window).scroll(function() {
		/** current scroll */
		scroll_top = $(window).scrollTop();
		/** check scroll up or down. */
		if(scroll_top < lastScrollTop) {
			/* scroll up. */
			scroll_status = 'up';
		} else {
			/* scroll down. */
			scroll_status = 'down';
		}
		
		lastScrollTop = scroll_top;
		
		/* check sticky menu. */
		if(CMSOptions.menu_sticky == '1'){
			cms_stiky_menu();
		}
		
		/* check back to top */
		cms_back_to_top();
	});

	/**
	 * Stiky menu
	 * 
	 * Show or hide sticky menu.
	 * @author Fox
	 * @since 1.0.0
	 */
	function cms_stiky_menu() {
		if (header_top < scroll_top) {
			switch (true) {
				case (window_width > 992):
					header.addClass('header-fixed');
					$('body').addClass('fixed-margin-top');
					break;
				case ((window_width <= 992 && window_width >= 768) && (CMSOptions.menu_sticky_tablets == '1')):
					header.addClass('header-fixed');
					$('body').addClass('fixed-margin-top');
					break;
				case ((window_width <= 768) && (CMSOptions.menu_sticky_mobile == '1')):
					header.addClass('header-fixed');
					$('body').addClass('fixed-margin-top');
					break;
			}
		} else {
			header.removeClass('header-fixed');
			$('body').removeClass('fixed-margin-top');
		}
	}
	function cms_stiky_menu_fixed_page() {
		if (header_top < scroll_top) {
			header.addClass('header-fixed-page-trans');
		} else {
			header.removeClass('header-fixed-page-trans');
		}
	}
	/**
	 * Mobile menu
	 * 
	 * Show or hide mobile menu.
	 * @author Fox
	 * @since 1.0.0
	 */
	
	$('#cms-menu-mobile').on('click',function(){
		var navigation = $(this).parent().parent().parent().find('#cms-header-navigation');
		if(!navigation.hasClass('collapse')){
			navigation.addClass('collapse');
		} else {
			navigation.removeClass('collapse');
		}
	});
	/* check mobile screen. */
	function cms_mobile_menu() {
		var menu = $('#cms-header-navigation');
		
		/* active mobile menu. */
		switch (true) {
		case (window_width >= 993):
			menu.removeClass('phones-nav');
			menu.removeClass('tablets-nav');
			menu.removeClass('collapse');
			break;
		case (window_width <= 992 && window_width >= 768):
			menu.removeClass('phones-nav').addClass('tablets-nav');
			/* */
			cms_mobile_menu_group(menu);
			break;
		case (window_width <= 768):
			menu.removeClass('tablets-nav').addClass('phones-nav');
			break;
		default:
			menu.removeClass('mobile-nav tablets-nav');
			menu.find('li').removeClass('mobile-group');
			break;
		}	
	}
	/* group sub menu. */
	function cms_mobile_menu_group(nav) {
		nav.each(function(){
			$(this).find('li').each(function(){
				if($(this).find('ul:first').length > 0){
					$(this).addClass('mobile-group');
				}
			});
		});
	}
	/**
	 * Parallax.
	 * 
	 * @author Fox
	 * @since 1.0.0
	 */
	var cms_parallax = $('.cms_parallax');
	if(cms_parallax.length > 0 && CMSOptions.paralax == '1'){
		cms_parallax.each(function() {
			"use strict";
			var speed = $(this).attr('data-speed');
			
			speed = (speed != undefined && speed != '') ? speed : 0.1 ;
			
			$(this).parallax("50%", speed);
		});
	}
	/**
	 * Home Image Parallax - Custom.
	 * 
	 * @author Duong Tung
	 * @since 1.0.0
	 */
	function cms_custom_home_image_parallax() {
		var cms_custom_parallax = $('.home-image-parallax');

		if(cms_custom_parallax.length > 0 && CMSOptions.paralax == '1'){
			cms_custom_parallax.each(function() {
				"use strict";

				var element_height = cms_custom_parallax.height();
				if ( element_height < window_height ) {
					$(this).css('padding-top', (window_height-element_height)/2).css('padding-bottom', (window_height-element_height)/2 );
				}
				$(this).find('.arrow-in-home .arrow-in-home-inner').css('bottom', - ( (window_height-element_height)/2 - 70 ) );
				
			});
		}	
	}

	/**
	 * Arrow down
	 * 
	 * @author Duong Tung
	 * @since 1.0.0
	 */
	function cms_arrow_down() {
		$('.arrow-in-home a').on('click', function(e) {
			var id_scroll = $(this).attr('href');
			var sticky_height = $('.header-fixed').height();
			e.preventDefault();
			$("html, body").animate({ scrollTop: $(id_scroll).offset().top - 130 }, 800);
		});
	}
	
	/**
	 * Add placeholder for input - Custom.
	 * 
	 * @author Duong Tung
	 * @since 1.0.0
	 */
	function cms_custom_placeholder_input() {
		//For subscriber
		$('.wysija-paragraph > .wysija-input ').each(function(i, el) {
			el.placeholder = $(el).attr('title');
		});
	}
	
	/**
	 * Back To Top
	 * 
	 * @author Fox
	 * @since 1.0.0
	 */
	$('body').on('click', '#back_to_top', function () {
        $("html, body").animate({
            scrollTop: 0
        }, 1500);
    });
	
	/**
	 * One page
	 * 
	 * @author Fox
	 */
	if(CMSOptions.one_page == true){
		
		var one_page_options = {'filter' : '.onepage'};
		
		if(CMSOptions.one_page_speed != undefined) one_page_options.speed = parseInt(CMSOptions.one_page_speed);
		if(CMSOptions.one_page_easing != undefined) one_page_options.easing =  CMSOptions.one_page_easing;
		$('#site-navigation').singlePageNav(one_page_options);
	}
	
	/* Add class social show */
	$('.social-list .pe-7s-share').on('click',function(){
        $(this).next().toggleClass('show');
    });
	/* show or hide buttom  */
	function cms_back_to_top(){
		/* back to top */
        if (scroll_top < window_height) {
        	$('#back_to_top').addClass('off').removeClass('on');
        } else {
        	$('#back_to_top').removeClass('off').addClass('on');
        }
	}
	setTimeout(function(){
		/* Woo active payment method */
		$('ul.payment_methods').find('input[type="radio"]').each(function(){
			if($(this).is(':checked')){
				$(this).parent().parent().addClass('cms-active');
			}
			$(this).on('change',function(){
				$('ul.payment_methods > li').removeClass('cms-active');
				if($(this).is(':checked')){
					$(this).parent().parent().addClass('cms-active');
				}
			});
		});
	},1500)

	/* Portfolio Smooth Cover */
	function cms_portfolio_smooth() {
		if ( $('.cms-grid-portfolio-smooth').length ) {
			var wrap = $(this);

			$('.cms-grid-portfolio-smooth .cms-grid-item-portfolio').each(function() {
				var height = $(this).find('.cmm-portfolio-smooth-inner').outerHeight();

				$(this).find('.cms-grid-portfolio-wrapper').on('hover',function() {
					$(this).find('.cms-grid-portfolio-meta').css('height', height);
				},function() {
					$(this).find('.cms-grid-portfolio-meta').css('height', 0);
				});
			});
		}
	}

	/**
	  * Auto width video iframe
	  * 
	  * Youtube Vimeo.
	  * @author Fox
	  */
	 function cms_auto_video_width() {
	  $('.entry-video iframe').each(function(){
	   var v_width = $(this).width();
	   
	   v_width = v_width / (16/9);
	   $(this).attr('height',v_width);
	  })
	 }

	/*
	* Add min-height each item with attribute data-equal
	* Structure:  <div data-equal='.equal'><div class="equal">YOUR CONTENT HERE</div><div class="equal">YOUR CONTENT HERE YOUR CONTENT HERE</div></div>
	* @author Chinh Duong Manh
	*/
	(function($) {
	    $.fn.equalHeights = function(options) {
	    	window_width = $(window).width();
	        var maxHeight = 0,
	            $this = $(this),
	            equalHeightsFn = function() {
	                var height = $(this).innerHeight();
	                if ( height > maxHeight ) { maxHeight = height; }
	            };
	        options = options || {};

	        $this.each(equalHeightsFn);

	        if(options.wait) {
	            var loop = setInterval(function() {
	                if(maxHeight > 0) {
	                    clearInterval(loop);
	                    return $this.css('min-height', maxHeight);
	                }
	                $this.each(equalHeightsFn);
	            }, 100);
	        } else {
	            return $this.css('min-height', maxHeight);
	        }
	    };

	    // auto-initialize plugin
	    window_width = $(window).width();
	    if (window_width >= 768){
		    $('[data-equal]').each(function(){
		        var $this = $(this),
		            target = $this.data('equal');
		            $this.imagesLoaded(function(){
		            	$this.find(target).equalHeights();
		            });
		    });
		}

	})(jQuery);

	/* CMS Video HTML5 */
	jQuery.fn.extend({
		cms_videohtml5: function(){
			this.each(function(){
				var $this = $(this);
				var video = $this.find('video');
				var content = $this.find('.cms_videohtml5_content');
				
				video.on("ended", function() {
				   content.fadeTo( "slow", 1 );
				   $(this).addClass('video-pause').removeClass('video-play');
				});
				video.on("play", function() {
				   content.fadeTo( "slow", 0 );
				   $(this).addClass('video-pause').removeClass('video-pause');
				});
				video.on("pause", function() {
				   content.fadeTo( "slow", 1 );
				   $(this).addClass('video-pause').removeClass('video-play');
				});
				video.on("playing", function() {
		           content.fadeTo( "slow", 0 );
				   $('.cms-videohtml5-overlay-bg').fadeTo( "fast", 0 );
				   $(this).addClass('video-play').removeClass('video-pause');
				});
				$('.cms-play-btn-bg',$this).on('click',function(e){
					$('.cms-videohtml5-overlay-bg').fadeTo( "fast", 1 );
					e.stopPropagation();
					columnPlayVideo($this.find(video));
				})
				$('.cms-videohtml5-overlay-bg,video',$this).on('click',function(e){
					$('.cms-videohtml5-overlay-bg').fadeTo( "fast", 1 );
					e.stopPropagation();
					columnPauseVideo($this.find(video));	
				})
			});
		}
	});
	function columnPlayVideo(video){
		if (video.get(0).paused == true) {
			video.get(0).play();
		} else {
			video.get(0).pause();
		}
	}
	function columnPauseVideo(video){
		if (video.get(0).paused != true) {
			video.get(0).pause();
		}
	}

	/**
	  * CMS Popup Search Form
	  * 
	  * Youtube Vimeo.
	  * @author Chinh Duong Manh
	  */
	 function cms_show_popup_search() {
	  	$(".cms-popup-search-form #cms-show-search-form").on('click',function(){
        $(".cms-popup-search-form-content").toggle('slow');
    	});	
	 }
});



