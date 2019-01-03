$(document).ready(function(){
    $("button").click(function(){
        $("body").toggleClass("main");
        $("p").toggleClass("main");
        $("h1").toggleClass("headtxt");

    });
    $("button").click(function(){
      $("button").toggleClass("buttondark");


    });

    $("body").on('click', '.top', function() {
		$("nav.menu").toggleClass("menu_show");
	});


});
