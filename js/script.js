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

function explode(){
  if ($("#bg1").css("display") == "block"){
  	$("#bg1").fadeOut("fast");
  	$("#bg2").fadeIn("fast");
  }
  else if ($("#bg2").css("display") == "block"){
  	$("#bg2").fadeOut("fast");
  	$("#bg3").fadeIn("fast");
  }
  else if ($("#bg3").css("display") == "block"){
  	$("#bg3").fadeOut("fast");
  	$("#bg1").fadeIn("fast");
  } 

  setTimeout(explode, 4000);
}

setTimeout(explode, 4000);