jQuery(document).ready(function($){
    "use strict";
    var cms_custom_css_style = $('<style  type="text/css" class="cms-custtom-css-style"></style>').appendTo('head');
    $('.cms-custom-css').each(function(){
    	var $_this = $(this);
    	var $_id = $_this.attr('id');
    	if(typeof cms_custom_css_object[$_id] != 'undefined'){
    		var cms_custom_css = cms_custom_css_object[$_id].css;
	    	cms_custom_css_style.append(cms_custom_css);
    	}
    	
    })
	    
});