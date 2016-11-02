(function ($) {
    "use strict";
    $(document).ready(function(){
        var $menu = $('.nav-menu');
        $menu.find('ul.sub-menu > li').each(function(){
            var $submenu = $(this).find('>ul');
            if($submenu.length == 1){
                $(this).on('hover',function(){
                    if($submenu.offset().left + $submenu.width() > $(window).width()){
                        $submenu.addClass('back');
                    }else if($submenu.offset().left < 0){
                        $submenu.addClass('back');
                    }
                }, function(){
                    $submenu.removeClass('back');
                });
            }
        });
        /* Menu drop down*/
        $('.nav-menu li.menu-item-has-children').append('<span class="cms-menu-toggle"><i class="fa fa-angle-down"></i></span>');
        $('.cms-menu-toggle').on('click',function(){
            $(this).prev().toggleClass('submenu-open');
        });
        /* Page Fixed Menu */
        $('.header-fixed-page').parents('body').addClass('remove-margin-top');
        $('#cshero-header.no-sticky').parents('body').addClass('remove-margin-top');
        /* open header popup */
        $(".cms-open-popup").fullScreenPopup({
            lockDocumentScroll: true,
        });
    });

})(jQuery);
