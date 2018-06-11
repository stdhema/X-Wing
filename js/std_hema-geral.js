openMenu = function(){
	$('.general .center .menu .icon').click(function() {
		$('#menu-active').animate({
            left: "0",
        }, 1000);
	});
	$('#menu-active .back-close').click(function() {
		$('#menu-active').animate({
            left: "-100%",
        }, 1000);
	});
};

$(document).ready(function(){
	openMenu();
});