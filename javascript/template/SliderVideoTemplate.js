export default function SliderVideoTemplate(data) {

	
    const { title, video, id } = data;
    const carrouselVideo = `/assets/media/${video}`;
	const indexElement = document.querySelector('.index');
	
	function carrouselVideoDom() {
		const videoSliderDisplay = document.createElement("video");
	videoSliderDisplay.classList.add("slider-video");
        videoSliderDisplay.classList.add("photograph-allMedia");
		videoSliderDisplay.setAttribute('src', carrouselVideo);
		//videoSliderDisplay.style.backgroundImage = `url(${carrouselVideo})`;
		//videoSliderDisplay.setAttribute('src', indexElement.getAttribute('src'));
		videoSliderDisplay.setAttribute("alt", title);
		videoSliderDisplay.setAttribute("data-id", id);
		videoSliderDisplay.setAttribute("type", "mp4");
		return videoSliderDisplay;
	}

	return {
		title,
		video,
		id,
		carrouselVideoDom,
	};
}

