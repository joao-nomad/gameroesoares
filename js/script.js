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

$("#serv1").click(function() {
  $("#serviceTitle").text("Levantamento Topográfico");
  $("#serviceP").text("A ABNT NBR 13133 de 1994, Define o Levantamento topográfico como conjunto de métodos e processos que, através de medições de ângulos horizontais e verticais, de distâncias horizontais, verticais e inclinadas, com instrumental adequado à exatidão pretendida, primordialmente, implanta e materializa pontos de apoio no terreno, determinando suas coordenadas topográficas. A estes pontos se relacionam os pontos de detalhes visando à sua exata representação planimétrica numa escala predeterminada e à sua representação altimétrica por intermédio de curvas de nível, com eqüidistância também predeterminada e/ ou pontos cotados.");
  $("#photoServ").removeClass();
  $("#photoServ").addClass("service1Pic");
});

$("#serv2").click(function() {
  $("#serviceTitle").text("Locação de Obras");
  $("#serviceP").text("O trabalho de locação topográfica consiste em materializar, no terreno, pontos do projeto de uma obra para que a mesma possa ser executada no posicionamento e localização correta. Para isso pode-se trabalhar com georreferenciamento a partir de coordenadas planas ou UTM e altitudes disponibilizadas por órgãos oficiais como o IBGE e o Exército, ou também, realiza-se o trabalho a partir de coordenadas locais topográficas sem a utilização de dados oficiais e por esse motivo, tal método não é aceito para os trabalhos que necessitam de cadastros nos órgãos oficiais.");
  $("#photoServ").removeClass();
  $("#photoServ").addClass("service2Pic");
});

$("#serv3").click(function() {
  $("#serviceTitle").text("Georreferenciamento de Imóveis Rurais");
  $("#serviceP").text("A palavra: “geo” significa terra e referenciar = tomar como ponto de referência, localizar, situar, ou seja: georreferenciar é situar o imóvel rural no globo terrestre, é estabelecer um “endereço” para este imóvel na Terra, definindo a sua forma, dimensão e localização, através de métodos de levantamento topográfico, descrevendo os limites, características e confrontações do mesmo, através de memorial descritivo que deve conter as coordenadas dos vértices definidores dos limites dos imóveis rurais, georreferenciadas ao Sistema Geodésico Brasileiro, (art. 176, § 4º, da Lei 6.015/75, com redação dada pela Lei 10.267/01).");
  $("#photoServ").removeClass();
  $("#photoServ").addClass("service3Pic");
});

$("#serv4").click(function() {
  $("#serviceTitle").text("CAR");
  $("#serviceP").text("Criado pela Lei nº 12.651/2012, no âmbito do Sistema Nacional de Informação sobre Meio Ambiente - SINIMA, e regulamentado pela Instrução Normativa MMA nº 2, de 5 de maio de 2014, o Cadastro Ambiental Rural – CAR é um registro público eletrônico de âmbito nacional, obrigatório para todos os imóveis rurais, com a finalidade de integrar as informações ambientais das propriedades e posses rurais referentes às Áreas de Preservação Permanente - APP, de uso restrito, de Reserva Legal, de remanescentes de florestas e demais formas de vegetação nativa, e das áreas consolidadas, compondo base de dados para controle, monitoramento, planejamento ambiental e econômico e combate ao desmatamento.");
  $("#photoServ").removeClass();
  $("#photoServ").addClass("service4Pic");
});

$("#serv5").click(function() {
  $("#serviceTitle").text("Batimetria");
  $("#serviceP").text("A batimetria é a medição da profundidade dos oceanos, lagos e rios e é expressa cartograficamente por curvas batimétricas que unem pontos da mesma profundidade com equidistâncias verticais (curvas isobatimétricas), à semelhança das curvas de nível topográfico.");
  $("#photoServ").removeClass();
  $("#photoServ").addClass("service5Pic");
});