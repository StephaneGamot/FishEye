import { sliderContainer, slide, whiteBg } from "../Config/SliderData.js";
import {displayPhotosModalSlider } from "../utils/Slider.js"
import { removeKeyboardListeners, addKeyboardListeners } from "./Slider.js";
 
sliderContainer.setAttribute("role", "dialog");
sliderContainer.setAttribute("aria-labelledby", "mediaName");

export function closeModalSlider() {
	sliderContainer.style.display = "none";                // je ferme le modal
	slide.innerHTML = "";                                  //Je vide la gallery
	whiteBg.style.display = "none";                        // Me permet de creer un ecran blanc autour
	removeKeyboardListeners();                             // je retire les gestionnaires d'événements pour clavier lorsque le modal de ferme
	sliderContainer.removeAttribute("aria-modal");         // Retirer l'attribut aria-modal lorsque le modal est fermé
}

/**
 * It opens a modal slider with the image at the given index.
 * @param index - The index of the image to open the modal slider at.
 */
export function openModalSlider(index) {
	sliderContainer.style.display = "block";
	slide.innerHTML = "";
	whiteBg.style.display = "block";
	displayPhotosModalSlider(index);                       // j'enclenche la fonction display... avec la photo et l'index demandé
	addKeyboardListeners();                                // j'ajoute les gestionnaires d'événements pour clavier lorsque le modal s'ouvre
	sliderContainer.setAttribute("aria-modal", "true");    // Ajouter l'attribut aria-modal lorsque le modal est ouvert
}
