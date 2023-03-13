export default function silverTemplate(data) {
	const { title, image } = data;
	const sliderMedia = `/assets/media/${image}`;

	// création de la gallery de photos
	function silverTemplateDom() {
		const sliderContainer = document.getElementById("sliderContainer");
		const slideDiv = document.getElementById("slide");
		const sliderImage = document.createElement("img");
		
		sliderImage.setAttribute("src", sliderMedia);
		sliderImage.setAttribute("alt", title);
		sliderImage.classList.add("getAllImg");
		//console.log(sliderImage);

		slideDiv.appendChild(sliderImage);

		return sliderContainer;
	}
	return {
		title,
		image,
		silverTemplateDom,
	};
}
// RAJOUTER UN IF 