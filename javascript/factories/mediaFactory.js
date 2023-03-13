import PhotoModels from "../models/PhotoModels.js"
import VideoModels from "../models/VideoModels.js"

export class MediaFactory {
	static createMediaFactory(data) {
		if (data.hasOwnProperty("video")) {
			return new VideoModels(data);
		} else if (data.hasOwnProperty("image")) {
			return new PhotoModels(data);
		} else {
			throw new Error ("erreur sur mon MediaFactory");
		}
	}
}

// La methode static ne fonctionne que sur une classe d'objet
