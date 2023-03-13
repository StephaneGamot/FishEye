import { photographerEachIdMedia, galleryMedia } from "../Config/GetAllData.js";
import photoTemplate from "../template/photoTemplate.js";
import { VideoTemplate } from "../template/VideoTemplate.js";

export async function sortByName() {
	photographerEachIdMedia.sort((a, b) => {
		if (a.title < b.title) {
			return -1;
		} else if (a.title > b.title) {
			return 1;
		} else {
			return 0;
		}
	});
	
	galleryMedia.innerHTML = ""; // Vider la galerie

	photographerEachIdMedia.forEach((elem) => {
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
