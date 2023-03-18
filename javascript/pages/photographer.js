import Api from "../api/api.js";
import PhotographerProfilTemplate from "../template/photographerProfilTemplate.js";
import photoTemplate from "../template/photoTemplate.js";
import { VideoTemplate } from "../template/VideoTemplate.js";
import { MediaFactory } from "../factories/mediaFactory.js";
import { dropdownMenuSelect } from "../template/menuBtnTemplate.js";
import { openModalSlider } from "../utils/SliderOpenClose.js";
import SliderVideoTemplate from "../template/SliderVideoTemplate.js";
import SliderPhotoTemplate from "../template/SliderPhotoTemplate.js";
import { modalBtn, modal, displayModal, ModalContactForm } from "../utils/ModalContactForm.js";
import sortByDate from "../utils/sortByDate.js";
import {sortByLike, newSortByLike} from "../utils/sortByLike.js";
import { sortByName } from "../utils/sortByName.js";
import { urlparam, ID, dataApi, photographers, media, galleryMedia, theSlide, slides, getMediasDataId, photoImgs  } from "../Config/GetAllData.js";
import photographerMediaCreateDom from "../Config/photographerMediaCreateDom.js";
import { allPhotographeLikes } from "../utils/totalLikes.js";
import silverTemplate from "../template/sliderTemplate.js";
import photographerCreateDom from "../utils/photographerCreateDom.js"


photographerCreateDom();                                                                 // Récupération des données pour les photographes

modalBtn.addEventListener("click", displayModal);                                        // bouton qui enclenche le modal de contact

document.getElementById("dropdown-button-title").addEventListener("click", sortByName);  // Tri des photos par ordre alphabétique
document.getElementById("dropdown-button-popular").addEventListener("click", sortByLike);// Tri des photos par nb de coeur du - au +
document.getElementById("dropdown-button-date").addEventListener("click", sortByDate);   // Tri des photos par date du + ancien au + recent

photographerMediaCreateDom();                                                            // Appel de ma fonction pour la gallerie de photo

const modalBtnSlider = document.querySelectorAll(".modal-btn-slider");                   // Ouverture du modal / Slider 
modalBtnSlider.forEach((media, index) => {	
	media.addEventListener("click", () => openModalSlider(media.dataset.index));	
});

allPhotographeLikes();                                                                   // Tous les Likes en bas de page

