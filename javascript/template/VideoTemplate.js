import {totalLikes} from "../utils/totalLikes.js"

export function VideoTemplate ( data, index ) {
	const {  id,title, video, likes} = data;
    const Video = `/assets/media/${video}`;

	// création de la gallery de photos
	function videoTemplateCardDom() {
		const articleMedia = document.createElement("article");
		const galleryPic = document.createElement("div");

		// création de la carte
		const mediaCard = document.createElement("div");
		mediaCard.classList.add("photograph-photoCard");

		// création de la photo avec son lien vers le modal
		const mediaButton = document.createElement('a');
		mediaButton.classList.add("modal-btn-slider");
		mediaButton.setAttribute("data-index", index +1);
		//mediaButton.setAttribute('tabindex', '0');
		
		// création de la photo avec son lien vers le modal
		const videoImg = document.createElement("video");
		videoImg.classList.add("photograph-videos");
		videoImg.classList.add("photograph-allMedia");
		videoImg.setAttribute("src", Video);
		videoImg.setAttribute("type", "video/mp4");
		videoImg.setAttribute("alt", title);
		videoImg.setAttribute("data-id", id);
	
		
		videoImg.addEventListener('click', function() {
			videoImg.classList.add('index');
			console.log("35");
		  });

		// création du bas de la carte avec son nom et ses likes
		const footerCard = document.createElement("div");
		footerCard.classList.add("photograph-footerCard");

		const photoName = document.createElement("h2");
		photoName.classList.add("photograph-photoName");
		photoName.textContent = title;

		let theLikes = likes;
		let totalLikes2 = totalLikes;
		const divLikes = document.createElement("div");
		divLikes.classList.add("photograph-likes");
		divLikes.addEventListener("click", function () {
			if (theLikes === likes) {
				theLikes++;
				totalLikes2++
				console.log(theLikes);
				console.log(totalLikes2);
				
			} else if (totalLikes2 === totalLikes){
				totalLikes2+=
				console.log(totalLikes2);
			}
			else {
				theLikes--;
				totalLikes2--
				console.log(theLikes);
				console.log(totalLikes2);
			}
			likesNumber.textContent = theLikes;
			document.getElementById("allLikesNumber").innerHTML = totalLikes2;
		});

		//likesNumber.textContent = likes;
		

		const likesNumber = document.createElement("h3");
		likesNumber.classList.add("photograph-likesNumber");
		likesNumber.textContent = likes;
		likesNumber.setAttribute("aria-label", "bouton j'aime")

		const littleHeart = document.createElement("img");
		littleHeart.src = "../assets/images/myHeart.png";
		littleHeart.classList.add("photograph-littleHeart");
		littleHeart.setAttribute("alt", "Petit coeur rouge permetant de like ou disliker");

		// creation des appenchild de la gallery
		articleMedia.appendChild(galleryPic);
		galleryPic.appendChild(mediaCard);
		mediaCard.appendChild(mediaButton);
		mediaButton.appendChild(videoImg);
		mediaCard.appendChild(footerCard);
		footerCard.appendChild(photoName);
		footerCard.appendChild(divLikes);
		divLikes.appendChild(likesNumber);
		divLikes.appendChild(littleHeart);

		return articleMedia;
	}
	return {
		title,
		video,
		likes,
		id,
		videoTemplateCardDom,
	};
}
