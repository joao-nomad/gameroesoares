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
  if ($("#backs").hasClass("bg1") == true){
  	$("#backs").removeClass();
  	$("#backs").addClass("bg2");
  }

  else if ($("#backs").hasClass("bg2") == true){
  	$("#backs").removeClass();
  	$("#backs").addClass("bg3");
  }

  else if ($("#backs").hasClass("bg3") == true){
  	$("#backs").removeClass();
  	$("#backs").addClass("bg1");
  }

  setTimeout(explode, 4000);
}

setTimeout(explode, 4000);

$("#missionBtn").click(function() {
	$("#aboutBtn").removeClass("btnActived");
	$("#missionBtn").addClass("btnActived");
	$("#aboutTxt").hide();
	$("#missionTxt").show();
});

$("#aboutBtn").click(function() {
	$("#missionBtn").removeClass("btnActived");
	$("#aboutBtn").addClass("btnActived");
	$("#missionTxt").hide();
	$("#aboutTxt").show();
});

/*Slider*/
$(".whoBtn").click(function() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top - 60
    }, 2000);
});

$(".serviceBtn").click(function() {
    $('html, body').animate({
        scrollTop: $("#servicesMenu").offset().top
    }, 2000);
});

$(".orcamBtn").click(function() {
    $('html, body').animate({
        scrollTop: $("#orcamentos").offset().top
    }, 2000);
});

$(".contBtn").click(function() {
    $('html, body').animate({
        scrollTop: $("#contato").offset().top
    }, 2000);
});

$(".homeBtn").click(function() {
    $('html, body').animate({
        scrollTop: $("#homeDiv").offset().top
    }, 2000);
});