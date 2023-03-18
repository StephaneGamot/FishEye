export default function photographerProfilTemplate(data) {
	const { name, city, title, country, tagline, price, id, portrait } = data;

	const picture = `/assets/photographers/${portrait}`;

	function getPhotographerCardDOM() {
		const article = document.createElement("article");

		
		const sectionHead = document.createElement("section");  // Creation de la section d'entête
		sectionHead.classList.add("photograph-header");

		const divLeft = document.createElement("div");          // creation de la div de gauche (dans l'entête)
		divLeft.classList.add("photograph-divLeft");

		const divCenter = document.createElement("div");        // creation de la div du centre (dans l'entête)
		divCenter.classList.add("photograph-divCenter");

		const divRight = document.createElement("div");         // creation de la div de droite (dans l'entête)
		divRight.classList.add("photograph-divRight");

		const h1 = document.createElement("h1");                // creation du titre (nom)
		h1.setAttribute("aria-label", "nom du photographe: ");
		h1.classList.add("photograph-h1");
		h1.textContent = name;

		const ville = document.createElement("h2");             // creation de la ville + pays
		ville.textContent = city + ", " + country;
		ville.classList.add("photographer-city");

		const slogan = document.createElement("p");             // creation du slogan
		slogan.textContent = tagline;
		slogan.classList.add("photograph-slogan");

		const button = document.getElementById("btnContact");   // creation du boutton (div centrale)
		button.classList.add("contact_button");
		button.textContent = "Contactez-moi";

		const photo = document.createElement("img");            // creation du boutton (div de droite)
		photo.classList.add("photograph-pic");
		photo.setAttribute("src", picture);
		photo.setAttribute("alt", name);

		article.appendChild(sectionHead);                       // creation des appenchild de la section d'entête
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
