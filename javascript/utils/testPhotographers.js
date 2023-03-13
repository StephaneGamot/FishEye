import Api from "../api/api.js";
import PhotographerProfilTemplate from "../template/photographerProfilTemplate.js";
import photoTemplate from "../template/photoTemplate.js";
import { VideoTemplate } from "../template/VideoTemplate.js";
import { MediaFactory } from "../factories/mediaFactory.js";
import { dropdownMenuSelect } from "../template/menuBtnTemplate.js";
import Slider from "../utils/slider.js";
//import  displayPhotosModalSlider from "../utils/SliderOpenClose.js";
import SliderVideoTemplate from "../template/SliderVideoTemplate.js";
import SliderPhotoTemplate from "../template/SliderPhotoTemplate.js";
import { modalBtn, modal, displayModal, ModalContactForm } from "../utils/ModalContactForm.js";
import sortByDate from "../utils/sortByDate.js";
import sortByLike from "../utils/sortByLike.js";
import { sortByName } from "../utils/sortByName.js";
import { urlparam, ID, dataApi, photographers, media } from "../Config/GetAllData.js";

import { allPhotographeLikes } from "../utils/totalLikes.js";
import silverTemplate from "../template/sliderTemplate.js";

/**************************** RECUPERATION DES DONNEES ***************************************/

const photographerId = photographers.filter((elem) => elem.id == ID); // je selectionne un seul photographe (celui choisi)

const photographerEachIdMedia = media.filter((elem) => elem.photographerId == ID); // Je sélectionne le travail d'un photographe (celui choisi)

const mediaByFactory = photographerEachIdMedia.map((data) => MediaFactory.createMediaFactory(data)); // idem mais via le factory

async function photographerCreateDom() {
	const photographerMain = document.getElementById("head-main"); // je les positionne dans l'element ID "head-main"

	photographerId.forEach((photographer) => {
		const photographerModel = PhotographerProfilTemplate(photographer); // j'installe le HTML / DOM de la page
		const photographerCardDOM = photographerModel.getPhotographerCardDOM(); // mon DOM
		photographerMain.appendChild(photographerCardDOM); // Mon DOM est le fils de "Main"

		//console.log(photographerCardDOM);
	});
}
photographerCreateDom();
/**************************** BOUTON CONTACT ***************************************/

modalBtn.addEventListener("click", displayModal);

/**************************** TRI ***************************************/

document.getElementById("dropdown-button-title").addEventListener("click", sortByName);
document.getElementById("dropdown-button-popular").addEventListener("click", sortByLike);
document.getElementById("dropdown-button-date").addEventListener("click", sortByDate);

/**************************** GALLERY ***************************************/

async function photographerMediaCreateDom() {
	const galleryMedia = document.getElementById("gallery-media"); // je localise

	mediaByFactory.forEach((elem) => {
		if ("image" in elem) {
			const photoMedia = photoTemplate(elem); // Òbjet avce les infos de la photos
			const photoMediaDom = photoMedia.photoTemplateCardDom(); // la phot dans le dom
			//console.log(photoMediaDom);
			galleryMedia.appendChild(photoMediaDom);
		} else if ("video" in elem) {
			const videoMedia = VideoTemplate(elem); // Òbjet avce les infos de la video
			const videoMediaDom = videoMedia.videoTemplateCardDom(); // la video dans le dom
			galleryMedia.appendChild(videoMediaDom);
		} else {
			console.log("IL Y A UN GROS BUG au niveau affichage Photo/video");
		}
	});
}
photographerMediaCreateDom();

/**************************** Ouverture et Fermeture du modal / Slider ***************************************/
const modalBtnSlider = document.querySelectorAll(".modal-btn-slider");

modalBtnSlider.forEach((image) => {
	image.addEventListener("click", displayPhotosModalSlider);
});

const sliderContainer = document.querySelector(".slider-container"); // DOM du sliderContainer

function displayPhotosModalSlider() {
	sliderContainer.style.display = "block";
	console.log("la modale s'ouvre ");
}

const modalCloseSlider = document.getElementById("modal-close-slider");
modalCloseSlider.addEventListener("click", closeModalSlider);

function closeModalSlider() {
	sliderContainer.style.display = "none";
}

/**************************** faire apparaitre l'image demandé dans le slider  ***************************************/

const whereToPlaceTheMedia = document.getElementById("slide"); // DOM de la div slide entre le container et les photos
const slides = [...photographerEachIdMedia]; // Tableau avec tous les medias

const getAllImg = document.querySelectorAll(".getAllImg"); // Noeud DOM qui recupere toutes les images pour le slider
console.log(whereToPlaceTheMedia);
console.log(getAllImg);

const recupMediaId = photographerEachIdMedia.map((item) => item.id); // cela affiche tous les Id s des medias de l'artiste
console.log(recupMediaId);

function displayImageInCarousel(recupMediaId) {
	const image = photographerEachIdMedia.find(media => media.id === recupMediaId);
	console.log(image);
	
	  const sliderPhotoMedia = silverTemplate(image);
	  console.log(sliderPhotoMedia);
	  const sliderPhotoMediaDom = sliderPhotoMedia.silverTemplateDom();
	  console.log(sliderPhotoMediaDom );
	  whereToPlaceTheMedia.innerHTML = ""; 
	  whereToPlaceTheMedia.appendChild(sliderPhotoMediaDom);
	
  }
  modalBtnSlider.forEach((image) => {
	image.addEventListener("click", (event) => {
		
		// Afficher l'image dans le carrousel en utilisant l'ID
		displayImageInCarousel();
	});
});

/******************************** */

function sliderMediasDisplay(mediaId) {
	const selectedMedia = slides.filter((item) => item.id === mediaId); // tableau vide mais qui sera rempli par l'oeuvre sélectionné
	console.log(selectedMedia);

	slides.forEach((item) => {
		if ("image" in item) {
			const sliderPhotoMedia = silverTemplate(item);
			const sliderPhotoMediaDom = sliderPhotoMedia.silverTemplateDom(); // Chaque sliderContainer
			const sliderImgDisplay = sliderPhotoMediaDom.querySelector("img"); // Chaque image DOM

			whereToPlaceTheMedia.appendChild(sliderImgDisplay);
			//console.log(sliderImgDisplay);
			//console.log(sliderPhotoMediaDom);
		} else {
			console.log("IL Y A UN GROS BUG du slider");
		}
	});
}

sliderMediasDisplay();

const eachPic = photographerEachIdMedia.filter((item) => item.hasOwnProperty("image")); // tableau qui récupere toutes les images mais pas les videos
console.log(eachPic);

//console.log(pics);
//const photos = document.querySelectorAll(".photograph-photoImg");

const getSlide = document.querySelector(".slide");

/****************************  ***************************************/

/**************************** Tous les Likes en bas de page ***************************************/

allPhotographeLikes();

/*********************** INCREMENTER LES LIKES ******************************************/
