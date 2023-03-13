export default class Api {
	constructor() {
		this.url = "../data/photographers.json";
	}

	async getPhotographers() {
		const response = await fetch(this.url);
		const data = await response.json();
		//console.log(data);
		return data;
	}

	async getMediasById(id) {
		const response = await fetch(this.url);
		const data = await response.json();
		const photographersMedia = data.media;
		const photographerEachIdMedia = photographersMedia.filter(
			(elem) => elem.photographerId == id
		);
		//console.log(photographerEachIdMedia);
		//console.log(photographersMedia);
		return data;
	}

	async getPhotographerById(id) {
		const response = await fetch(this.url);
		const data = await response.json();
		const photographersData = data.photographers;
		const photographerId = photographersData.filter((elem) => elem.id == id);

		//console.log(photographerId);
		//console.log(data);
		//console.log(photographersData);

		return data;
	}
}
