import {sortByLike}  from "../utils/sortByLike.js";

export const dropdownMenu = document.getElementById("dropdown-menu");
export const dropdownButtonPopular = document.getElementById("dropdown-button-popular");
export const arrow = document.getElementById("arrow");



//dropdownButtonPopular.addEventListener('focus', dropdownMenuSelect);
//dropdownButtonPopular.addEventListener('blur', dropdownMenuSelect);



/*
dropdownButtonPopular.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    dropdownMenuSelect();
  }
});

*/
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
