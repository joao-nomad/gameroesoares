$("#menuBars").click(function() {
	if ($("#menuBars").hasClass("barsIco") == true){
		$("#menuBars").removeClass("barsIco");
		$("#menuBars").addClass("closeIco");

		$("#responsiveBar").slideDown("slow");
	}

	else if ($("#menuBars").hasClass("closeIco") == true){
		$("#menuBars").removeClass("closeIco");
		$("#menuBars").addClass("barsIco");

		$("#responsiveBar").slideUp("slow");
	}
});


$(window).resize(function(){
	if ($(window).width() > 1230){
		$("#responsiveBar").css("display", "none");
		$("#menuBars").removeClass("closeIco");
		$("#menuBars").addClass("barsIco");
	}
});