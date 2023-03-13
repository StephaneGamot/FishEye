import { photographers, ID, media } from "../Config/GetAllData.js";
import PhotographerProfilTemplate from "../template/photographerProfilTemplate.js";

const photographerId = photographers.filter((elem) => elem.id == ID); // je selectionne un seul photographe (celui choisi)

const photographerEachIdMedia = media.filter((elem) => elem.photographerId == ID); // Je sélectionne le travail d'un photographe (celui choisi)

export default async function photographerCreateDom() {
	const photographerMain = document.getElementById("head-main"); // je les positionne dans l'element ID "head-main"

	photographerId.forEach((photographer) => {
		const photographerModel = PhotographerProfilTemplate(photographer); // j'installe le HTML / DOM de la page
		const photographerCardDOM = photographerModel.getPhotographerCardDOM(); // mon DOM
		photographerMain.appendChild(photographerCardDOM); // Mon DOM est le fils de "Main"
	});
}
