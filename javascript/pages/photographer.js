import photoTemplate from "../template/photoTemplate.js";
import { openModalSlider } from "../utils/SliderOpenClose.js";
import { modalBtn, displayModal } from "../utils/ModalContactForm.js";
import sortByDate from "../utils/sortByDate.js";
import { sortByLike } from "../utils/sortByLike.js";
import { sortByName } from "../utils/sortByName.js";
import photographerMediaCreateDom from "../Config/photographerMediaCreateDom.js";
import { allPhotographeLikes } from "../utils/totalLikes.js";
import photographerCreateDom from "../utils/photographerCreateDom.js";
//import {dropdownMenuSelect} from "../template/menuBtnTemplate.js"

/********************** Récupération des données pour les photographes ************************************/

photographerCreateDom();

/********************** enclenche le modal de contact ************************************/

modalBtn.addEventListener("click", displayModal);

/********************** BOUTON DE TRI ************************************/

// Tri des photos par nb de coeur du - au +
const dropdownMenu = document.getElementById("dropdown-menu");

let isMenuOpen = false;

function handleClick() {
	if (!isMenuOpen) {
		dropdownMenuSelect();
		isMenuOpen = true;
	} else {
		sortByLike();
	}
}

function dropdownMenuSelect() {
	dropdownMenu.style.display = "block";
	arrow.style.transform = 'rotate(180deg)';
}

// Tri des photos par nb de coeur du - au +
const dropdownButtonPopular = document.getElementById("dropdown-button-popular");
dropdownButtonPopular.addEventListener("click", handleClick);
let lastKeyPressTime = 0;
const DOUBLE_CLICK_DELAY = 300; // en millisecondes

dropdownButtonPopular.addEventListener("keydown", (event) => {
	if (event.key === "Enter" || event.key === " ") {
		event.preventDefault();

		const currentTime = new Date().getTime();
		if (currentTime - lastKeyPressTime < DOUBLE_CLICK_DELAY) {
			closeMenu();
		} else {
			handleClick();
		}
		lastKeyPressTime = currentTime;
	}
});

// Fonction pour fermer le menu déroulant
function closeMenu() {
	if (isMenuOpen) {
		dropdownMenu.style.display = "none";
		arrow.style.transform = 'rotate(0deg)';
		isMenuOpen = false;
	}
}

dropdownButtonPopular.addEventListener("dblclick", closeMenu);

// Tri des photos par date du + ancien au + recent
const dropdownButtonDate = document.getElementById("dropdown-button-date");
dropdownButtonDate.addEventListener("click", sortByDate);
dropdownButtonDate.addEventListener("keydown", (event) => {
	if (event.key === "Enter" || event.key === " ") {
		event.preventDefault();
		sortByDate();
	}
});

// Tri des photos par ordre alphabétique
const dropdownButtonTitle = document.getElementById("dropdown-button-title");
dropdownButtonTitle.addEventListener("click", sortByName);
dropdownButtonTitle.addEventListener("keydown", (event) => {
	if (event.key === "Enter" || event.key === " ") {
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
