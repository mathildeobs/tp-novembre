document.getElementById("icone").addEventListener("click",toggleMenu);
function toggleMenu(e) {
	document.getElementById("menuburger").classList.toggle("change");
}

var tabSousMenu = document.getElementsByClassName("toggleSousMenu");
for(var i=0; i<tabSousMenu.length;i++){
	tabSousMenu[i].addEventListener("click",toggleSousMenu);
}
function toggleSousMenu(e){
	e.target.nextElementSibling.classList.toggle("hide");
}