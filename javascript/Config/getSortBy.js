
/*

import { photographerEachIdMedia, galleryMedia, modalBtnSlider } from "./GetAllData.js";
import photoTemplate from "../template/photoTemplate.js";
import { VideoTemplate } from "../template/VideoTemplate.js";
import { openModalSlider } from "../utils/SliderOpenClose.js";

export default function getSortBy() {
	photographerEachIdMedia.forEach((elem, index) => {
		if ("image" in elem) {
			const photoMedia = photoTemplate(elem, index); // Òbjet avce les infos de la photos
			const photoMediaDom = photoMedia.photoTemplateCardDom(); // la phot dans le dom
			galleryMedia.appendChild(photoMediaDom);
		} else if ("video" in elem) {
			const videoMedia = VideoTemplate(elem, index); // Òbjet avce les infos de la video
			const videoMediaDom = videoMedia.videoTemplateCardDom(); // la video dans le dom
			galleryMedia.appendChild(videoMediaDom);
		} else {
			console.log("IL Y A UN GROS BUG au niveau affichage Photo/video");
		}
	});
  const modalBtnSlider = document.querySelectorAll(".modal-btn-slider");
  modalBtnSlider.forEach((media, index) => {
    media.setAttribute("data-order", index);
    media.addEventListener("click", () => openModalSlider(media.dataset.index));	
  
  });
}
*/