(function($){
	"use strict";
    $(document).ready(function(){
    	$(".cms-special-carousel").each(function(){
    		var $this = $(this),slide_id = $this.attr('id'),slider_settings = cms_special_carousel[slide_id];
                slider_settings.slidesOnStage = false;
                slider_settings.increment = parseInt(slider_settings.increment);
    			slider_settings.pause = parseInt(slider_settings.pause);
    			slider_settings.speed = parseInt(slider_settings.speed);
                slider_settings.navButtons = (slider_settings.navButtons==="true");
    			slider_settings.navList = (slider_settings.navList==="true");
    			slider_settings.navButtonsShow = "true";
    			slider_settings.slideWidth = parseInt(slider_settings.slideWidth);
    			slider_settings.slidePosition =  'center';
                slider_settings.slideStart = 'mid';
                slider_settings.slideScaling = parseInt(slider_settings.slideScaling);
                slider_settings.stageHeight = parseInt(slider_settings.stageHeight);
    		var $slider = $this.miSlider(slider_settings);
    	});
    });
})(jQuery)