export default function getSortBy(order = "date") {
	// Trier les éléments en fonction de l'ordre choisi
	const sortedMedia = photographerEachIdMedia.sort((a, b) => {
	  if (order === "date") {
		return new Date(b.date) - new Date(a.date);
	  } else if (order === "title") {
		return a.title.localeCompare(b.title);
	  } else if (order === "likes") {
		return b.likes - a.likes;
	  } else {
		console.log("Ordre inconnu, tri par défaut (date)");
		return new Date(b.date) - new Date(a.date);
	  }
	});
  
	// Afficher les éléments triés
	sortedMedia.forEach((elem, index) => {
	  if ("image" in elem) {
		const photoMedia = photoTemplate(elem, index);
		const photoMediaDom = photoMedia.photoTemplateCardDom();
		galleryMedia.appendChild(photoMediaDom);
	  } else if ("video" in elem) {
		const videoMedia = VideoTemplate(elem, index);
		const videoMediaDom = videoMedia.videoTemplateCardDom();
		galleryMedia.appendChild(videoMediaDom);
	  } else {
		console.log("IL Y A UN GROS BUG au niveau affichage Photo/video");
	  }
	});
  
	// Mettre à jour les index du data-order pour les boutons
	modalBtnSlider.forEach((media, index) => {
	  media.setAttribute("data-order", index);
	  media.addEventListener("click", () => openModalSlider(media.dataset.order));
	});
  }
  








  import { photographerEachIdMedia } from "../Config/GetAllData.js";
import { theSlide, mediaByFactory, getMediasDataId } from "../Config/GetAllData.js";
import { slides, photoImgs, media, ID } from "../Config/GetAllData.js";
import SliderPhotoTemplate from "../template/SliderPhotoTemplate.js";
import SliderVideoTemplate from "../template/SliderVideoTemplate.js";
import photoTemplate from "../template/photoTemplate.js";
import PhotoModels from "../models/PhotoModels.js";
import getSortBy from "../Config/getSortBy.js";
import sortByLike from "../utils/sortByLike.js"

const sliderContainer = document.getElementById("sliderContainer");
const slide = document.getElementById("slide");
const modalCloseSlider = document.getElementById("modal-close-slider");
const sliderWidth = sliderContainer.offsetWidth;
const mainWhite = document.getElementById("white");
 
export function displayPhotosModalSlider(index) {
	

	mediaByFactory.forEach((elem) => {
		if ("image" in elem) {
			const photoMedia = SliderPhotoTemplate(elem); // Òbjet avce les infos de la photos
			const photoMediaDom = photoMedia.createImgElement(); // la phot dans le dom
			//photoMediaDom.setAttribute("data-index", index +1) ;
			slide.appendChild(photoMediaDom);
		} else if ("video" in elem) {
			const videoMedia = SliderVideoTemplate(elem); // Òbjet avce les infos de la photos
			const videoMediaDom = videoMedia.carrouselVideoDom(); //
			//videoMediaDom.setAttribute("data-index", index +1) ;
			slide.appendChild(videoMediaDom);
		} else {
			console.log("IL Y A UN GROS BUG au niveau affichage Photo/video");
		}
	});

	const modalCloseSlider = document.getElementById("modal-close-slider");
	modalCloseSlider.addEventListener("click", closeModalSlider);
	const sliderBtnLeft = document.getElementById("slider-btn-left");
	const sliderBtnRight = document.getElementById("slider-btn-right");
	let slideIndex = parseInt(index)-1 ;
	console.log(slideIndex);
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
	}
}
export function openModalSlider(index) {
	sliderContainer.style.display = "block";
	theSlide.innerHTML = ""; // Vider la galerie
	slide.innerHTML = "";
	displayPhotosModalSlider(index);
}









export default function sortByLike() {
	photographerEachIdMedia.sort((a, b) => {
		if (a.likes < b.likes) {
		  return -1;
		} else if (a.likes > b.likes) {
		  return 1;
		} else {
		  return 0;
		}
	  }).forEach((elem, index) => {
		elem["data-order"] = index + 1; // ajouter une propriété "data-order" à chaque élément
		if ("image" in elem) {
		  const photoMedia = photoTemplate(elem, index); // passer l'index en paramètre
		  const photoMediaDom = photoMedia.photoTemplateCardDom();
		  galleryMedia.appendChild(photoMediaDom);
		} else if ("video" in elem) {
		  const videoMedia = VideoTemplate(elem);
		  const videoMediaDom = videoMedia.videoTemplateCardDom();
		  galleryMedia.appendChild(videoMediaDom);
		} else {
		  console.log("IL Y A UN GROS BUG au niveau affichage Photo/video");
		}
	  });
}







import { photographerEachIdMedia, galleryMedia } from "../Config/GetAllData.js";
import photoTemplate from "../template/photoTemplate.js";
import { VideoTemplate } from "../template/VideoTemplate.js";
import { openModalSlider } from "./SliderOpenClose.js";

export let newSortByLike;

export function sortByLike() {

	galleryMedia.innerHTML = ""; // Vider la galerie

	photographerEachIdMedia.sort((a, b) => {
		if (a.likes < b.likes) {
		  return -1;
		} else if (a.likes > b.likes) {
		  return 1;
		} else {
		  return 0;
		}
	  }).forEach((elem, index) => {
		elem["data-order"] = index + 1; // j'ajoute une propriété "data-order" à chaque élément
		if ("image" in elem) {
		  const photoMedia = photoTemplate(elem, index); // passer l'index en paramètre
		  const photoMediaDom = photoMedia.photoTemplateCardDom();
		  galleryMedia.appendChild(photoMediaDom);
		} else if ("video" in elem) {
		  const videoMedia = VideoTemplate(elem);
		  const videoMediaDom = videoMedia.videoTemplateCardDom();
		  galleryMedia.appendChild(videoMediaDom);
		} else {
		  console.log("IL Y A UN GROS BUG au niveau affichage Photo/video");
		}
	  });
	  const modalBtnSlider = document.querySelectorAll(".modal-btn-slider");
modalBtnSlider.forEach((media, index) => {	
	media.addEventListener("click", () => openModalSlider(media.dataset.index));	
});
console.log(photographerEachIdMedia);
newSortByLike = photographerEachIdMedia;
}
