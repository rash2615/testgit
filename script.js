// Empécher le déclenchement des transitions au chargement de la page
document.getElementById('site-body').classList.remove('no-transition');

// Ajout d'un écouteur d'événement sur le menu-button
document.getElementById('menu-button').addEventListener('click', function(){
	document.getElementById('site-nav').classList.toggle('visible');
})

const darkModeToggle = document.querySelector('#dark-mode-toggle');

  darkModeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
  });