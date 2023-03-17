export default function SliderPhotoTemplate(data) {
	const { title, image, id } = data;
	const carrouselMedia = `/assets/media/${image}`;

	function createImgElement() {
		const imgSliderDisplay = document.createElement("img");
		imgSliderDisplay.classList.add("slider-img");
		imgSliderDisplay.classList.add("photograph-allMedia");
		imgSliderDisplay.setAttribute("src", carrouselMedia);
		imgSliderDisplay.setAttribute("alt", title);
		imgSliderDisplay.setAttribute("data-id", id);
		imgSliderDisplay.setAttribute("type", "jpg");
		const imgSliderDisplayTitle = document.createElement("h2");
		imgSliderDisplayTitle.textContent = title;
		return imgSliderDisplay;
	}

	return {
		title,
		image,
		id,
	
		createImgElement,
	};
}

// il me donne le template de comment chaque foto va etre disposée
