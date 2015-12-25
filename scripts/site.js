
/*
*	Author : Sidhin S Thomas
*	Email : sidhinthomas@gmail.com
*/

"use strict";
function sticky_relocate() {
    var window_top = $(window).scrollTop();
    var div_top = $('#sticky-anchor').offset().top;
    if (window_top > div_top) {
        $('#sticky').addClass('stick');
    } else {
        $('#sticky').removeClass('stick');
    }
}

$(function () {
    $(window).scroll(sticky_relocate);
    sticky_relocate();
});
$(function() {
	$(window).load(function(){
 		$("#base").mCustomScrollbar({
        	theme: "dark"
        });
    });
})