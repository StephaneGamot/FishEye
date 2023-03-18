import { totalLikes } from "../utils/totalLikes.js";

export default function photoTemplate(data, index) {
	const { title, image, likes, id } = data;
	const pictureMedia = `/assets/media/${image}`;

	// création de la gallery de photos
	function photoTemplateCardDom() {
		const articleMedia = document.createElement("article");
		const galleryPic = document.createElement("div");

		// création de la carte
		const mediaCard = document.createElement("div");
		mediaCard.classList.add("photograph-photoCard");

		// création de la photo avec son lien vers le modal
		const mediaButton = document.createElement("a");
		mediaButton.classList.add("modal-btn-slider");
		mediaButton.setAttribute("data-index", index + 1);
		mediaButton.setAttribute("aria-label", "Afficher la photo " + title);

		const photoImg = document.createElement("img");
		photoImg.classList.add("photograph-photoImg");
		photoImg.classList.add("photograph-allMedia");
		photoImg.setAttribute("src", pictureMedia);
		photoImg.setAttribute("type", "jpg");
		photoImg.setAttribute("alt", "titre du media" + title);
		photoImg.setAttribute("data-id", id);

		photoImg.addEventListener("click", function () {
			photoImg.classList.add("index");
		});

		// création du bas de la carte avec son nom et ses likes
		const footerCard = document.createElement("div");
		footerCard.classList.add("photograph-footerCard");

		const photoName = document.createElement("h2");
		photoName.classList.add("photograph-photoName");
		photoName.textContent = title;

		const divLikes = document.createElement("div");
		divLikes.classList.add("photograph-likes");
		divLikes.setAttribute("role", "button");
		divLikes.setAttribute("aria-label", "Aimer la photo " + title);
		divLikes.setAttribute("tabindex", "0");

		let theLikes = likes;
		let totalLikes2 = totalLikes;

		divLikes.addEventListener("click", function () {
			if (theLikes === likes) {
				theLikes++;
				totalLikes2++;
				console.log(theLikes);
				console.log(totalLikes2);
			} else if (totalLikes2 === totalLikes) {
				totalLikes2 += console.log(totalLikes2);
			} else {
				theLikes--;
				totalLikes2--;
				console.log(theLikes);
				console.log(totalLikes2);
			}
			likesNumber.textContent = theLikes;
			document.getElementById("allLikesNumber").innerHTML = totalLikes2;
		});

		const likesNumber = document.createElement("h3");
		likesNumber.classList.add("photograph-likesNumber");
		likesNumber.textContent = theLikes;

		const littleHeart = document.createElement("img");
		//littleHeart.setAttribute("id", "myLittleHeart");
		littleHeart.src = "../assets/images/myHeart.png";
		littleHeart.classList.add("photograph-littleHeart");
		littleHeart.setAttribute("alt", "Petit coeur rouge permetant de like ou disliker");
		littleHeart.setAttribute("title", "myLittleHeart");

		// creation des appenchild de la gallery
		articleMedia.appendChild(galleryPic);
		galleryPic.appendChild(mediaCard);
		mediaCard.appendChild(mediaButton);

		mediaButton.appendChild(photoImg);
		mediaCard.appendChild(footerCard);
		footerCard.appendChild(photoName);
		footerCard.appendChild(divLikes);
		divLikes.appendChild(likesNumber);
		divLikes.appendChild(littleHeart);

		return articleMedia;
	}
	const divLikes = photoTemplateCardDom().querySelector(".photograph-likes");
	return {
		title,
		image,
		likes,
		divLikes,
		id,

		photoTemplateCardDom,
	};
}
