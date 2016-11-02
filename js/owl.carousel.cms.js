(function($){
	"use strict";
    $(document).ready(function(){
    	$(".cms-carousel").each(function(){
    		var $this = $(this),slide_id = $this.attr('id'),slider_settings = cmscarousel[slide_id];
                slider_settings.margin = 30;
    			slider_settings.loop = (slider_settings.loop==="true");
    			slider_settings.mouseDrag = (slider_settings.mouseDrag==="true");
    			slider_settings.nav = (slider_settings.nav==="true");
    			slider_settings.dots = (slider_settings.dots==="true");
    			slider_settings.autoplay = (slider_settings.autoplay==="true");
    			slider_settings.autoplayTimeout =  parseInt(slider_settings.autoplayTimeout);
                slider_settings.autoplayHoverPause = (slider_settings.autoplayHoverPause==="true");
                slider_settings.smartSpeed = parseInt(slider_settings.smartSpeed);
    		$this.owlCarousel(slider_settings);
    	});
    });
})(jQuery)