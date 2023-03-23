//import Api from "../api/api.js";
import { photographerName } from "../Config/getAllData.js";

export const modalBtn = document.getElementById("btnContact");
export const modal = document.getElementById("contact_modal");
export function displayModal() {
	modal.style.display = "block";
	focusOnFirstElement();
	trapFocus();
	ModalContactForm();
}

// Met le focus sur le premier élément du formulaire (firstName)
function focusOnFirstElement() {
	const firstName = document.getElementById("firstName");
	firstName.focus();
}

// Gère le focus à l'intérieur du modal et l'empêche de sortir
function trapFocus() {
	const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
	const modal = document.getElementById("modalContact");
	const firstFocusableElement = modal.querySelectorAll(focusableElements)[0];
	const focusableContent = modal.querySelectorAll(focusableElements);
	const lastFocusableElement = focusableContent[focusableContent.length - 1];

	document.addEventListener("keydown", function (e) {
		let isTabPressed = e.key === "Tab" || e.keyCode === 9;

		if (!isTabPressed) {
			return;
		}

		if (e.shiftKey) {
			// si majuscule et tab sont enfoncés, déplacez le focus vers l'élément précédent
			if (document.activeElement === firstFocusableElement) {
				lastFocusableElement.focus();
				e.preventDefault();
			}
		} else {
			// si tab est enfoncé, déplacez le focus vers l'élément suivant
			if (document.activeElement === lastFocusableElement) {
				firstFocusableElement.focus();
				e.preventDefault();
			}
		}
	});
}

// permet de gerer au click la fermeture du modal
export async function ModalContactForm() {
	const modalClose = document.getElementById("close-modal");
	modalClose.setAttribute("aria-label", "Fermer le formulaire de contact");
	modalClose.addEventListener("click", closeModal);
	modalClose.setAttribute("role", "button");
	function closeModal() {
		modal.style.display = "none";
	}

	// Gestionnaire d'événements pour fermer le modal avec les touches du clavier
	function handleKeyboardClose(event) {
		// Vérifier si la touche Entrée est enfoncée lorsque l'élément modalClose a le focus
		if (event.target === modalClose && event.key === "Enter") {
			closeModal();
		}
		// Vérifier si la touche Échap est enfoncée
		if (event.key === "Escape") {
			closeModal();
		}
	}
	modalClose.addEventListener("keydown", handleKeyboardClose);
	const PhotographName = photographerName; // Je recupere le nom du photographe

	// DOM
	const firstName = document.getElementById("firstName");
	const lastName = document.getElementById("lastName");
	const email = document.getElementById("email");
	const message = document.getElementById("message");
	const sendBtn = document.getElementById("btnSend");

	// aria-label
	firstName.setAttribute("aria-label", "Prénom");
	lastName.setAttribute("aria-label", "Nom");
	email.setAttribute("aria-label", "Email");
	message.setAttribute("aria-label", "Message");
	sendBtn.setAttribute("role", "button");

	// H1
	const modal_H1 = document.getElementById("ModalH1");
	modal_H1.textContent = "Contactez-moi" + " " + PhotographName;

	// placeHolder
	firstName.placeholder = "Prénom";
	lastName.placeholder = "Nom";
	email.placeholder = "Email";
	message.placeholder = "Laissez nous un message";

	// texte erreur
	const firstNameErr = document.getElementById("firstNameErr");
	const lastNameErr = document.getElementById("lastNameErr");
	const emailErr = document.getElementById("emailErr");
	const messageErr = document.getElementById("messageErr");

	// Ajout d'attributs aria-live pour informer les utilisateurs d'écran de lecture des erreurs
	firstNameErr.setAttribute("aria-live", "polite");
	lastNameErr.setAttribute("aria-live", "polite");
	emailErr.setAttribute("aria-live", "polite");
	messageErr.setAttribute("aria-live", "polite");

	// REGEX
	const alphaRegex = /^[a-zA-Zéêëèîïâäàçù ,.'-]{2,70}$/;
	const emailRegex = /^([a-zA-Z0-9.-_--]+[@]{1}[a-zA-Z0-9.-_--]+[.]{1}[a-z]{2,3}){0,90}$/;

	const firstNameValue = document.getElementById("firstName").value;
	const lastNameValue = document.getElementById("lastName").value;
	const emailValue = document.getElementById("email").value;
	const messageValue = document.getElementById("message").value;

	// Listen input addEventListener
	firstName.addEventListener("input", function () {
		validateFirstName();
	});
	lastName.addEventListener("input", function () {
		validateLastName();
	});
	email.addEventListener("input", function () {
		validateEmail();
	});
	message.addEventListener("input", function () {
		validateMessage();
	});
	sendBtn.addEventListener("click", function (event) {
		// création d'un addEventListener pour le bouton submit j'ecoute pour voir s'il repond a ma demande
		event.preventDefault(); // Je bloque tant que tout n 'est pas accepté
		validate(); // c'est la fonction qui sera exécuté lorsque on ecrira dans l'input (suite a notre ecoute)
		console.log(
			"Nom:" +
				" " +
				document.getElementById("firstName").value +
				" " +
				document.getElementById("lastName").value +
				" " +
				"Email:" +
				" " +
				document.getElementById("email").value +
				" " +
				"Message:" +
				" " +
				document.getElementById("message").value
		);
	});

	/***** Validate First Name *****/
	let validateFirstName = function () {
		// création de la fonction que je vais ecouter pour valider qu'il n'y a pas "d'erreur de frappe"
		let testFirstName = alphaRegex.test(firstName.value); // je teste avec le regex ce qu'ecrit le client voir qu'il n'y est pas d'erreur
		if (testFirstName == false) {
			// si mon test ne passe pas
			firstNameErr.textContent = "Veuillez saisir votre prénom svp 🙏"; // alors on ecrit un message d'erreur dessous "bla bla bla"
			firstNameErr.classList.add("inputErr"); // Me permet d'afficher le message d'erreur en rouge petite taille .....
			firstName.classList.add("inputErrBorder"); // me permet de creer une bordure rouge
		} else {
			firstNameErr.textContent = ""; // puisqu'il n 'y a pas erreur on n'ecris pas de message erreur!
			firstName.classList.remove("inputErrBorder"); // puisqu'il n 'y a pas erreur je retire la bordure colorée
		}
		return testFirstName;
	};

	/***** Validate Last Name *****/
	let validateLastName = function () {
		let testLastName = alphaRegex.test(lastName.value);
		if (testLastName == false) {
			lastNameErr.textContent = "Veuillez saisir votre nom svp 🙏";
			lastNameErr.classList.add("inputErr");
			lastName.classList.add("inputErrBorder");
		} else {
			lastNameErr.textContent = "";
			lastName.classList.remove("inputErrBorder", "inputEmptyBorder");
		}
		return testLastName;
	};

	/***** Validate Email *****/
	let validateEmail = function () {
		let testEmail = emailRegex.test(email.value);
		if (testEmail == false) {
			emailErr.textContent = "Veuillez saisir votre Email svp 🙏";
			emailErr.classList.add("inputErr");
			email.classList.add("inputErrBorder");
		} else {
			emailErr.textContent = "";
			email.classList.remove("inputErrBorder", "inputEmptyBorder");
		}
		return testEmail;
	};

	/***** Validate message *****/
	let validateMessage = function () {
		if (message.value == "") {
			messageErr.textContent = "Veuillez entrer 2 caractères ou plus svp 🙏";
			messageErr.classList.add("inputErr");
			message.classList.add("inputErrBorder");
		} else {
			messageErr.textContent = "";
			message.classList.remove("inputErrBorder", "inputEmptyBorder");
		}
		return message.value !== "";
	};

	// Si tous les inputs sont validés alors le Modal sera accepté et se retirera
	function validate() {
		validateFirstName() && validateLastName() && validateEmail() && validateMessage() && closeModal();
	}
}
