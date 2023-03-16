export default function SliderVideoTemplate(data) {
	const { title, video, id } = data;
	const carrouselVideo = `/assets/media/${video}`;
	//const indexElement = document.querySelector('.index');

	function carrouselVideoDom() {
		const videoSliderDisplay = document.createElement("video");
		videoSliderDisplay.classList.add("slider-video");
		videoSliderDisplay.classList.add("photograph-allMedia");
		videoSliderDisplay.setAttribute("src", carrouselVideo);
		videoSliderDisplay.setAttribute("alt", title);
		videoSliderDisplay.setAttribute("data-id", id);
		videoSliderDisplay.setAttribute("type", "video/mp4");

		return videoSliderDisplay;
	}

	return {
		title,
		video,
		id,
		carrouselVideoDom,
	};
}
