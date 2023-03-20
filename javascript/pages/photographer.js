import photoTemplate from "../template/photoTemplate.js";
import { openModalSlider } from "../utils/SliderOpenClose.js";
import { modalBtn, displayModal} from "../utils/ModalContactForm.js";
import sortByDate from "../utils/sortByDate.js";
import {sortByLike} from "../utils/sortByLike.js";
import { sortByName } from "../utils/sortByName.js";
import photographerMediaCreateDom from "../Config/photographerMediaCreateDom.js";
import { allPhotographeLikes } from "../utils/totalLikes.js";
import photographerCreateDom from "../utils/photographerCreateDom.js"

/********************** Récupération des données pour les photographes ************************************/

photographerCreateDom();                                                               

/********************** enclenche le modal de contact ************************************/

modalBtn.addEventListener("click", displayModal);                                      

/********************** BOUTON DE TRI ************************************/
const dropdownMenu = document.getElementById('dropdown-menu');

// Tri des photos par nb de coeur du - au +
const dropdownButtonPopular = document.getElementById('dropdown-button-popular');
dropdownButtonPopular.addEventListener("click", sortByLike);                     
dropdownButtonPopular.addEventListener('keydown', (event) => {
	if (event.key === 'Enter' || event.key === ' ') {
	  event.preventDefault();
	  dropdownMenu.style.display = dropdownMenu.style.display === 'none' ? 'block' : 'none';
	}
  });

  // Tri des photos par date du + ancien au + recent
const dropdownButtonDate = document.getElementById('dropdown-button-date');
dropdownButtonDate.addEventListener("click", sortByDate);                           
dropdownButtonDate.addEventListener('keydown', (event) => {
	if (event.key === 'Enter' || event.key === ' ') {
	  event.preventDefault();
	  sortByDate();
	}
  });

  // Tri des photos par ordre alphabétique
const dropdownButtonTitle = document.getElementById('dropdown-button-title');
dropdownButtonTitle.addEventListener("click", sortByName);                          
dropdownButtonTitle.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    sortByName();
  }
});

/********************** Appel de la fonction Gallery photo ************************************/

photographerMediaCreateDom();                                                           

/********************** Ouverture du modal / Slider ************************************/

const modalBtnSlider = document.querySelectorAll(".modal-btn-slider");                  
modalBtnSlider.forEach((media, index) => {	
	media.addEventListener("click", () => openModalSlider(media.dataset.index));	
});

/********************** Gere tous les Likes en bas de page ************************************/

allPhotographeLikes();                                                                  

