

import { photographerEachIdMedia, galleryMedia } from "../Config/GetAllData.js";
import { theSlide, mediaByFactory, getMediasDataId } from "../Config/GetAllData.js";
import { slides, photoImgs, media, ID } from "../Config/GetAllData.js";
import SliderPhotoTemplate from "../template/SliderPhotoTemplate.js";
import SliderVideoTemplate from "../template/SliderVideoTemplate.js";
import photoTemplate from "../template/photoTemplate.js";
import PhotoModels from "../models/PhotoModels.js";

const sliderContainer = document.getElementById("sliderContainer");
sliderContainer.setAttribute("role", "dialog");
sliderContainer.setAttribute("aria-labelledby", "mediaName");

const slide = document.getElementById("slide");
const modalCloseSlider = document.getElementById("modal-close-slider");
const sliderWidth = sliderContainer.offsetWidth;
const mediaName = document.getElementById("mediaName");
const whiteBg = document.getElementById("whiteBG");


function closeModalSlider() {
	sliderContainer.style.display = "none";
	theSlide.innerHTML = ""; // Vider la galerie
	slide.innerHTML = "";
	whiteBg.style.display = "none";
	removeKeyboardListeners(); // je retire les gestionnaires d'événements pour clavier lorsque le modal de ferme
	sliderContainer.removeAttribute("aria-modal"); // Retirer l'attribut aria-modal lorsque le modal est fermé
}

function handleKeyDown(event) {
	if (event.key === "ArrowLeft" || event.key === "Left") {
		prev();
	} else if (event.key === "ArrowRight" || event.key === "Right") {
		next();
	} else if (event.key === "Escape" || event.key === "Esc") {
		closeModalSlider();
	}
}


function addKeyboardListeners() {
	document.addEventListener("keydown", handleKeyDown);
}

function removeKeyboardListeners() {
	document.removeEventListener("keydown", handleKeyDown);
}

export function displayPhotosModalSlider(index) {
	photographerEachIdMedia.forEach((elem) => {
		if ("image" in elem) {
			const photoMedia = SliderPhotoTemplate(elem); // Òbjet avce les infos de la photos
			const photoMediaDom = photoMedia.createImgElement(); // la phot dans le dom
			slide.appendChild(photoMediaDom);
		} else if ("video" in elem) {
			const videoMedia = SliderVideoTemplate(elem); // Òbjet avce les infos de la photos
			const videoMediaDom = videoMedia.carrouselVideoDom(); //
			slide.appendChild(videoMediaDom);
		} else {
			console.log("IL Y A UN GROS BUG au niveau affichage Photo/video");
		}
	});

	const modalCloseSlider = document.getElementById("modal-close-slider");
	modalCloseSlider.addEventListener("click", closeModalSlider);

	const sliderBtnLeft = document.getElementById("slider-btn-left");
	const sliderBtnRight = document.getElementById("slider-btn-right");
	sliderBtnLeft.setAttribute("tabindex", "0");
	sliderBtnRight.setAttribute("tabindex", "0");
	sliderBtnLeft.setAttribute("aria-label", "Image précédente");
sliderBtnRight.setAttribute("aria-label", "Image suivante");


let slideIndex = parseInt(index) - 1;
let currentMediaIndex = index - 1;
let sliderImgTitle = photographerEachIdMedia[currentMediaIndex].title;
mediaName.textContent = sliderImgTitle;
const sliderImgTitleLength = photographerEachIdMedia.length;
let newMediaIndexParse = parseInt(sliderImgTitleLength);

showSlide(slideIndex);

function showSlide(n) {
    slide.style.transform = `translateX(-${n * 100}%)`;
}

let clickCount = 0;

function prev() {
	clickCount++;
    if (slideIndex === 0) {
        slideIndex = slide.children.length - 1;
        index = newMediaIndexParse;
    } else if (clickCount === 1) {
		index -= 1;
		slideIndex--;
	}
	else {
        slideIndex--;
    }
    index--;
    showSlide(slideIndex);
    mediaName.textContent = photographerEachIdMedia[index].title;
}

function next() {
	clickCount++;
    if (slideIndex === slide.children.length - 1) {
        slideIndex = 0;
        index = -1;
    } else if (clickCount === 1) {
		slideIndex++;
		index -= 1;
	}else {
        slideIndex++;
    }
    index++;
    showSlide(slideIndex);
    mediaName.textContent = photographerEachIdMedia[index].title;
}

	sliderBtnLeft.addEventListener("click", prev);
	sliderBtnRight.addEventListener("click", next);
	
	sliderBtnLeft.addEventListener("keydown", (e) => {
		if (e.key === "Enter" || e.key === " ") {
			e.preventDefault();
			prev();
		}
	});
	
	sliderBtnRight.addEventListener("keydown", (e) => {
		if (e.key === "Enter" || e.key === " ") {
			e.preventDefault();
			next();
		}
	});
	

	
}

export function openModalSlider(index) {
	sliderContainer.style.display = "block";
	theSlide.innerHTML = ""; // Vider la galerie
	slide.innerHTML = "";
	whiteBg.style.display = "block";
	console.log("AZ");
	displayPhotosModalSlider(index);
	addKeyboardListeners(); // j'ajoute les gestionnaires d'événements pour clavier lorsque le modal s'ouvre
	sliderContainer.setAttribute("aria-modal", "true"); // Ajouter l'attribut aria-modal lorsque le modal est ouvert

}