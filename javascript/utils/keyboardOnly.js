import { displayPhotosModalSlider} from "./Slider.js"
import { closeModalSlider } from "./SliderOpenClose.js"


const myArrows = displayPhotosModalSlider();

// Utiliser les fonctions internes
myArrows.fonction1(); // Affiche "Ceci est la fonction interne 1"
myArrows.fonction2(); // Affiche "Ceci est la fonction interne 2"

export function handleKeyDown(event) {
	if (event.key === "ArrowLeft" || event.key === "Left") {
		prev();
	} else if (event.key === "ArrowRight" || event.key === "Right") {
		next();
	} else if (event.key === "Escape" || event.key === "Esc") {
		closeModalSlider();
	}
}

export function addKeyboardListeners() {
	document.addEventListener("keydown", handleKeyDown);
}

export function removeKeyboardListeners() {
	document.removeEventListener("keydown", handleKeyDown);
}