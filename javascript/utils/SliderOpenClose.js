import { photographerEachIdMedia } from "../Config/GetAllData.js";
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

//console.log(slides[0]);

export function displayPhotosModalSlider() {
	//const indexElement = document.getElementsByClassName("index")[0]; // on récupère le premier élément avec la classe "index"
	//console.log(indexElement);

	mediaByFactory.forEach((elem) => {
		if ("image" in elem) {
			const photoMedia = SliderPhotoTemplate(elem); // Òbjet avce les infos de la photos
			const photoMediaDom = photoMedia.createImgElement(); // la phot dans le dom
//console.log(photoMediaDom);
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
	let slideIndex = 0;

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
	
	function nextSlide() {
	  if (slideIndex === slide.children.length - 1) {
		slideIndex = 0;
	  } else {
		slideIndex++;
	  }
	  showSlide(slideIndex);
	}
	
	sliderBtnLeft.addEventListener('click', prevSlide);
	sliderBtnRight.addEventListener('click', nextSlide);
	function closeModalSlider() {
		sliderContainer.style.display = "none";
		theSlide.innerHTML = ""; // Vider la galerie
		slide.innerHTML = "";

		console.log("fermé");
	}
}
export function openModalSlider() {
	sliderContainer.style.display = "block";
	theSlide.innerHTML = ""; // Vider la galerie
	slide.innerHTML = "";

	displayPhotosModalSlider();
}