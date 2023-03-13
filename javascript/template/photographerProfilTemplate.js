export default function photographerProfilTemplate(data) {
	const { name, city, title, country, tagline, price, id, portrait } = data;

	const picture = `/assets/photographers/${portrait}`;

	function getPhotographerCardDOM() {
		const article = document.createElement("article");

		// reation de la section d'entête
		const sectionHead = document.createElement("section");
		sectionHead.classList.add("photograph-header");

		// creation de la div de gauche (dans l'entête)
		const divLeft = document.createElement("div");
		divLeft.classList.add("photograph-divLeft");

		// creation de la div du centre (dans l'entête)
		const divCenter = document.createElement("div");
		divCenter.classList.add("photograph-divCenter");

		// creation de la div de droite (dans l'entête)
		const divRight = document.createElement("div");
		divRight.classList.add("photograph-divRight");

		// creation du titre (nom)
		const h1 = document.createElement("h1");
		h1.setAttribute("aria-label", title);
		h1.classList.add("photograph-h1");
		h1.textContent = name;

		// creation de la ville + pays
		const ville = document.createElement("h2");
		ville.textContent = city + ", " + country;
		ville.classList.add("photographer-city");

		// creation du slogan
		const slogan = document.createElement("p");
		slogan.textContent = tagline;
		slogan.classList.add("photograph-slogan");

		// creation du boutton (div centrale)
		const button = document.getElementById("btnContact");
		button.classList.add("contact_button");
		button.textContent = "Contactez-moi";

		// creation du boutton (div de droite)
		const photo = document.createElement("img");
		photo.classList.add("photograph-pic");
		photo.setAttribute("src", picture);
		photo.setAttribute("alt", name);

		// creation des appenchild de la section d'entête
		article.appendChild(sectionHead);
		sectionHead.appendChild(divLeft);
		divLeft.appendChild(h1);
		divLeft.appendChild(ville);
		divLeft.appendChild(slogan);
		sectionHead.appendChild(divCenter);
		divCenter.appendChild(button);
		sectionHead.appendChild(divRight);
		divRight.appendChild(photo);

		return article;
	}

	return {
		city,
		tagline,
		country,
		title,
		price,
		id,
		picture,
		getPhotographerCardDOM,
	};
}
