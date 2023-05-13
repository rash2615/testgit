// Empécher le déclenchement des transitions au chargement de la page
document.getElementById('site-body').classList.remove('no-transition');

// Ajout d'un écouteur d'événement sur le menu-button
document.getElementById('menu-button').addEventListener('click', function(){
	document.getElementById('site-nav').classList.toggle('visible');
})

function Changer_theme() {
	
	var header = document.getElementById("ma_header");
	var nav = document.getElementById("ma_nav");
	var footer = document.getElementById("footer");
	var aside = document.getElementById("ma_aside");
	var h2 = document.getElementById("ma_h2");
	var p = document.getElementById("ma_p");
	var p2 = document.getElementById("ma_p2");
	var p3 = document.getElementById("ma_p3");
	var p4 = document.getElementById("ma_p4");
		if (this.id == "theme_bleu") {
	header.style.backgroundColor = "#2874a6";
	nav.style.backgroundColor ="#2874a6";
	footer.style.backgroundColor = "#2874a6" ;
	aside.style.backgroundColor = "#2874a6";
	h2.style.backgroundColor = "#2874a6";
	p.style.backgroundColor = "#2874a6";
	p2.style.backgroundColor = "#2874a6";
	p3.style.backgroundColor = "#2874a6";
	p4.style.backgroundColor = "#2874a6";
	}
		if (this.id == "theme_orange") {
	header.style.backgroundColor = "#cc5500" ;
	nav.style.backgroundColor = "#cc5500" ;
	footer.style.backgroundColor = "#cc5500" ;
	aside.style.backgroundColor = "#cc5500" ;
	h2.style.backgroundColor = "#cc5500";
	p.style.backgroundColor = "#cc5500";
	p2.style.backgroundColor = "#cc5500";
	p3.style.backgroundColor = "#cc5500";
	p4.style.backgroundColor = "#cc5500";
	}
}
	var theme_bleu = document.getElementById("theme_bleu");
	theme_bleu.addEventListener('click', Changer_theme);
	var theme_orange = document.getElementById("theme_orange");
	theme_orange.addEventListener('click', Changer_theme);
	console.debug("Changement de couleur");