import { photographerEachIdMedia, galleryMedia } from "../Config/GetAllData.js";
import { theSlide, mediaByFactory, getMediasDataId } from "../Config/GetAllData.js";
import { slides, photoImgs, media, ID } from "../Config/GetAllData.js";
import SliderPhotoTemplate from "../template/SliderPhotoTemplate.js";
import SliderVideoTemplate from "../template/SliderVideoTemplate.js";
import photoTemplate from "../template/photoTemplate.js";
import PhotoModels from "../models/PhotoModels.js";

const sliderContainer = document.getElementById("sliderContainer");
const slide = document.getElementById("slide");
const modalCloseSlider = document.getElementById("modal-close-slider");
const sliderWidth = sliderContainer.offsetWidth;
const mediaName = document.getElementById("mediaName");
const whiteBg = document.getElementById("whiteBG");

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

	function prevSlide() {
		if (slideIndex === 0) {
			slideIndex = slide.children.length - 1;
		} else {
			slideIndex--;
		}
		showSlide(slideIndex);
	}

	let clickCount = 0;

	function prevName() {
		clickCount++;
		if (index == 0) {
			index = newMediaIndexParse - 1;
		} else if (clickCount === 1 && index != 0) {
			index -= 2;
		} else {
			index -= 1;
		}

		if (index >= 0 && index < photographerEachIdMedia.length) {  // me permet de vérifiez l'index si il est valide avant de mettre à jour 
			mediaName.textContent = photographerEachIdMedia[index].title;
		}
	}

	function nextSlide() {
		if (slideIndex === slide.children.length - 1) {
			slideIndex = 0;
		} else {
			slideIndex++;
		}
		showSlide(slideIndex);
	}
	function nextName() {
		if (index === slide.children.length - 1) {
			index = 0;
		} else {
			mediaName.textContent = photographerEachIdMedia[index++].title;
		}
	}

	sliderBtnLeft.addEventListener("click", prevSlide);
	sliderBtnLeft.addEventListener("click", prevName);
	sliderBtnRight.addEventListener("click", nextSlide);
	sliderBtnRight.addEventListener("click", nextName);

	function closeModalSlider() {
		sliderContainer.style.display = "none";
		theSlide.innerHTML = ""; // Vider la galerie
		slide.innerHTML = "";
		whiteBg.style.display = "none";
		console.log("fermé");
	}
}

export function openModalSlider(index) {
	sliderContainer.style.display = "block";
	theSlide.innerHTML = ""; // Vider la galerie
	slide.innerHTML = "";
	whiteBg.style.display = "block";
	console.log("AZ");
	displayPhotosModalSlider(index);
}
