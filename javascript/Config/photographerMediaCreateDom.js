import {mediaByFactory, galleryMedia}  from "../Config/GetAllData.js"
import {VideoTemplate} from "../template/VideoTemplate.js"
import photoTemplate from "../template/photoTemplate.js"

export default async function photographerMediaCreateDom() {
	
	mediaByFactory.forEach((elem) => {
		if ("image" in elem) {
			const photoMedia = photoTemplate(elem); // Òbjet avce les infos de la photos
			const photoMediaDom = photoMedia.photoTemplateCardDom(); // la phot dans le dom
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