import {sortByLike}  from "../utils/sortByLike.js";

export const dropdownMenu = document.getElementById("dropdown-menu");
export const dropdownButtonPopular = document.getElementById("dropdown-button-popular");
export const arrow = document.getElementById("arrow");

export let isMenuOpen = false;

export function handleClick() {
	if (!isMenuOpen) {
		dropdownMenuSelect();
		isMenuOpen = true;
	} else {
		sortByLike();
	}
}

export function dropdownMenuSelect() {
	dropdownMenu.style.display = "block";
	arrow.style.transform = 'rotate(180deg)';
}

//dropdownButtonPopular.addEventListener('focus', dropdownMenuSelect);
//dropdownButtonPopular.addEventListener('blur', dropdownMenuSelect);




dropdownButtonPopular.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    dropdownMenuSelect();
  }
});

// Fonction pour fermer le menu déroulant
export function closeMenu() {
	if (isMenuOpen) {
		dropdownMenu.style.display = "none";
		arrow.style.transform = 'rotate(0deg)';
		isMenuOpen = false;
	}
}

/*

export function dropdownMenuSelect() {
  if (dropdownMenu.style.display === 'none') {
    dropdownMenu.style.display = 'block';
    arrow.style.transform = 'rotate(180deg)';
  } else {
    dropdownMenu.style.display = 'none';
    arrow.style.transform = 'rotate(0deg)';
  }
}
*/
// fonction de Tri qui permet de s'ouvrir en dropdown & fleche qui bouge
