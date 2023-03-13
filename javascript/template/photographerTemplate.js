export default function photographerTemplate(data) {
	const { name, city, country, tagline, portrait, price, id } = data;

	const picture = `./assets/photographers/${portrait}`;
	const photographerPageUrl = `../html/photographer.html?id=${id}`;

	function getUserCardDOM() { // createPhotographerCard
		const article = document.createElement("article");
		const headCard = document.createElement("a");
		headCard.setAttribute("aria-label", name);
		headCard.href = photographerPageUrl;

		const imgPortrait = document.createElement("img");
		imgPortrait.setAttribute("src", picture);
		imgPortrait.setAttribute("alt", name);

		const h2Name = document.createElement("h2");
		h2Name.textContent = name;

		const townCountry = document.createElement("p");
		townCountry.textContent = `${city}, ${country}`;
		townCountry.classList.add("photographer_city");

		const taglinePhilosophie = document.createElement("p");
		taglinePhilosophie.textContent = tagline;
		taglinePhilosophie.classList.add("photographer_tagline");

		const pricePerDay = document.createElement("p");
		pricePerDay.textContent = `${price}€ / jour`;
		pricePerDay.classList.add("photographer_price");

		article.appendChild(headCard);
		headCard.appendChild(imgPortrait);
		headCard.appendChild(h2Name);
		article.appendChild(townCountry);
		article.appendChild(taglinePhilosophie);
		article.appendChild(pricePerDay);

		return article;
	}
	return { name, city, picture, country, tagline, id, price, getUserCardDOM };
}
