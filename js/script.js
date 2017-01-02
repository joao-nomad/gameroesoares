$("#menuBars").click(function() {
	//hasClass
  $("#responsiveBar").slideDown("slow");
});


$(window).resize(function(){
	if ($(window).width() > 1230){
		$("#responsiveBar").css("display", "none");
	}
});