import {photographerEachIdMedia} from "../Config/GetAllData.js"

export default function Slider (){

    const slides = [...photographerEachIdMedia]; // je crée un tableau a partir de la class .... je récupere toutes les slides
    console.log(slides);
    
    const sliderData = {
        locked: false,
        direction: 0,
        slideOutIndex: 0,
        slideInIndex: 0,
    };
    console.log(sliderData);
    const directionButtons = [...document.querySelectorAll(".slider-btn")]; // je crée un tableau a partir de la class .slide (les <div> ayant pour class .slide)
    console.log("je m'en vais");
    directionButtons.forEach((btn) => btn.addEventListener("click", handleClick)); // j'enclenche la fonction handleClick
    
    function handleClick(e) {
        if (sliderData.locked) return;
        sliderData.locked = true;
    
        getDirection(e.target);
    
        slideOut();
    }
    
    
    function getDirection(btn) {
	sliderData.direction = btn.className.includes("right") ? 1 : -1;

	//sliderData.slideOutIndex = slides.findIndex((slide) => slide.classList.contains("active"));
    sliderData.slideOutIndex = slides.indexOf(document.querySelector('.active'));

	if (sliderData.slideOutIndex + sliderData.direction > slides.length - 1) {
		sliderData.slideInIndex = 0;
	} else if (sliderData.slideOutIndex + sliderData.direction < 0) {
		sliderData.slideInIndex = slides.length - 1;
	} else {
		sliderData.slideInIndex = sliderData.slideOutIndex + sliderData.direction;
	}
}
    
    // je gere le slider(photo) le
    function slideOut() {
        slideAnimation({
            // Récupération de la fonction pour les "effets Speciaux" pour ...
            el: slides[sliderData.slideInIndex], // je recupere l'index de la "futur photo"
            props: {
                // je change certains props
                display: "flex",
                transform: `translateX(${sliderData.direction < 0 ? "100%" : "-100%"})`, // si < alors l'element viendra de la droite et > viendra e la gauche
                opacity: 0,
            },
        });
    
        // je donne un effet a celle qui s'en va
        slideAnimation({
            el: slides[sliderData.slideOutIndex], // je recupere l'index de "l'ex photo"
            props: {
                display: "flex",
                transition: "transform 0.4s cubic-bezier(0.74, -0.34, 1, 1.19), opacity 0.4s ease-out", // je lui donne un effet retro
                transform: `translateX(${sliderData.direction < 0 ? "-100%" : "100%"})`,
                opacity: 0,
            },
        });
        slides[sliderData.slideOutIndex].addEventListener("transitionend", slideIn); // me permet d'enclencher la fonction SlideIn (apres avoir fait partir l'ex)
    }
    // Fonction qui permet de recuperer chaque props qui se trouve (slideOut) qui permet de changer ses props
    function slideAnimation(animationObject) {
        for (const prop in animationObject.props) {
            animationObject.el.style[prop] = animationObject.props[prop];
        }
    }
    // fonction me permet d'enclencher l'arrrivé de la nouvelle photo
    function slideIn(e) {
        slideAnimation({
            el: slides[sliderData.slideInIndex],
            props: {
                transition: "transform 0.4s opacity 0.6s ease-out",
                transform: "translateX(0%)",
                opacity: 1,
            },
        });
        slides[sliderData.slideInIndex].classList.add("active"); // nouvelle photo = on lui rajoute la classe active
        slides[sliderData.slideOutIndex].classList.remove("active"); // ancienne photo = on lui retire la classe active
        e.target.removeEventListener("transitionend", slideIn); // puis je lui retire ....  puisqu'elle est partie
        slides[sliderData.slideOutIndex].style.display = "none"; // je la fais disparaitre (Abracadabra)
    }
    
    }
    Slider ();