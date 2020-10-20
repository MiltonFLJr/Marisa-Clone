//FUNÇÃO PARA AJUSTAR O TAMANHO DA BARRA DE PROMOÇÃO DO TOPO

function adjustPromobar(){

var imgpromo = document.getElementById("promogifid");
var windowwidth = screen.width;

if(windowwidth <= 768){

	imgpromo.src="imgs/FAIXAHOME-20190503-CliqueRetire-mobile.gif";

}else{
	imgpromo.src="imgs/FAIXAHOME-20190503-CliqueRetire-desktop.gif"
}

}


//FUNÇÃO PARA DAR AÇÃO AO CARROSSEL 

function changeImageCarousel(button){

	var carouselimg = document.getElementById("carouselimgid");
	var carouselimg2 = document.getElementById("carouselimgid2");
	var button1 = document.getElementById("button1");
	var button2 = document.getElementById("button2");
	var button3 = document.getElementById("button3");
	var button4 = document.getElementById("button4");
	var button5 = document.getElementById("button5");
	var button6 = document.getElementById("button6");
	var button7 = document.getElementById("button7");
	var button8 = document.getElementById("button8");
	var button9 = document.getElementById("button9");
	var button10 = document.getElementById("button10");
	var button11 = document.getElementById("button11");
	var button12 = document.getElementById("button12");

	switch(button){

		case "button1":

			carouselimg.src="imgs/carouselimgs/img1.webp";
			button1.src="imgs/dot2.png";
			button2.src="imgs/dot1.png";
			button3.src="imgs/dot1.png";
			button4.src="imgs/dot1.png";
			button5.src="imgs/dot1.png";
			button6.src="imgs/dot1.png";

		break;

		case "button2":
			carouselimg.src="imgs/carouselimgs/img2.gif";
			button1.src="imgs/dot1.png";
			button2.src="imgs/dot2.png";
			button3.src="imgs/dot1.png";
			button4.src="imgs/dot1.png";
			button5.src="imgs/dot1.png";
			button6.src="imgs/dot1.png";

		break;

		case "button3":
			carouselimg.src="imgs/carouselimgs/img3.webp";
			button1.src="imgs/dot1.png";
			button2.src="imgs/dot1.png";
			button3.src="imgs/dot2.png";
			button4.src="imgs/dot1.png";
			button5.src="imgs/dot1.png";
			button6.src="imgs/dot1.png";
		break;

		case "button4":
			carouselimg.src="imgs/carouselimgs/img4.webp";
			button1.src="imgs/dot1.png";
			button2.src="imgs/dot1.png";
			button3.src="imgs/dot1.png";
			button4.src="imgs/dot2.png";
			button5.src="imgs/dot1.png";
			button6.src="imgs/dot1.png";
		break;

		case "button5":
			carouselimg.src="imgs/carouselimgs/img5.webp";
			button1.src="imgs/dot1.png";
			button2.src="imgs/dot1.png";
			button3.src="imgs/dot1.png";
			button4.src="imgs/dot1.png";
			button5.src="imgs/dot2.png";
			button6.src="imgs/dot1.png";
		break;

		case "button6":
			carouselimg.src="imgs/carouselimgs/img6.webp";
			button1.src="imgs/dot1.png";
			button2.src="imgs/dot1.png";
			button3.src="imgs/dot1.png";
			button4.src="imgs/dot1.png";
			button5.src="imgs/dot1.png";
			button6.src="imgs/dot2.png";
		break;

		case "button7":
			carouselimg2.src="imgs/carouselimgs/img1mobile.png";
			button7.src="imgs/dot2.png";
			button8.src="imgs/dot3.png";
			button9.src="imgs/dot3.png";
			button10.src="imgs/dot3.png";
			button11.src="imgs/dot3.png";
			button12.src="imgs/dot3.png";
		break;

		case "button8":
			carouselimg2.src="imgs/carouselimgs/img2mobile.gif";
			button7.src="imgs/dot3.png";
			button8.src="imgs/dot2.png";
			button9.src="imgs/dot3.png";
			button10.src="imgs/dot3.png";
			button11.src="imgs/dot3.png";
			button12.src="imgs/dot3.png";
		break;

		case "button9":
			carouselimg2.src="imgs/carouselimgs/img3mobile.png";
			button7.src="imgs/dot3.png";
			button8.src="imgs/dot3.png";
			button9.src="imgs/dot2.png";
			button10.src="imgs/dot3.png";
			button11.src="imgs/dot3.png";
			button12.src="imgs/dot3.png";
		break;

		case "button10":
			carouselimg2.src="imgs/carouselimgs/img4mobile.png";
			button7.src="imgs/dot3.png";
			button8.src="imgs/dot3.png";
			button9.src="imgs/dot3.png";
			button10.src="imgs/dot2.png";
			button11.src="imgs/dot3.png";
			button12.src="imgs/dot3.png";
		break;

		case "button11":
			carouselimg2.src="imgs/carouselimgs/img5mobile.png";
			button7.src="imgs/dot3.png";
			button8.src="imgs/dot3.png";
			button9.src="imgs/dot3.png";
			button10.src="imgs/dot3.png";
			button11.src="imgs/dot2.png";
			button12.src="imgs/dot3.png";
		break;

		case "button12":
			carouselimg2.src="imgs/carouselimgs/img6mobile.png";
			button7.src="imgs/dot3.png";
			button8.src="imgs/dot3.png";
			button9.src="imgs/dot3.png";
			button10.src="imgs/dot3.png";
			button11.src="imgs/dot3.png";
			button12.src="imgs/dot2.png";
		break;

	}

}

//FUNÇÃO PARA DAR AÇÃO AO CARROSEL COM ULTIMOS PRODUTOS VISTOS

function visualizarUltimosVistos(chevron){

if(chevron == 2){

document.getElementById("section1").style.display="none";
document.getElementById("section2").style.display="flex";

}else{

document.getElementById("section1").style.display="flex";
document.getElementById("section2").style.display="none";

}

}
