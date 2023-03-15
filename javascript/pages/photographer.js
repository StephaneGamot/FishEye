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
import sortByLike from "../utils/sortByLike.js";
import { sortByName } from "../utils/sortByName.js";
import { urlparam, ID, dataApi, photographers, media, galleryMedia, theSlide, slides, getMediasDataId, photoImgs  } from "../Config/GetAllData.js";
import photographerMediaCreateDom from "../Config/photographerMediaCreateDom.js";
import { allPhotographeLikes } from "../utils/totalLikes.js";
import silverTemplate from "../template/sliderTemplate.js";
import photographerCreateDom from "../utils/photographerCreateDom.js"
/**************************** RECUPERATION DES DONNEES ***************************************/

photographerCreateDom();

/**************************** BOUTON CONTACT ***************************************/

modalBtn.addEventListener("click", displayModal);

/**************************** TRI ***************************************/

document.getElementById("dropdown-button-title").addEventListener("click", sortByName);
document.getElementById("dropdown-button-popular").addEventListener("click", sortByLike);
document.getElementById("dropdown-button-date").addEventListener("click", sortByDate);

/**************************** GALLERY ***************************************/

photographerMediaCreateDom();

/**************************** Ouverture du modal / Slider ***************************************/
const modalBtnSlider = document.querySelectorAll(".modal-btn-slider");
modalBtnSlider.forEach((image, index) => {
	image.addEventListener("click", () => openModalSlider(image.dataset.index));	

});


/**************************** Tous les Likes en bas de page ***************************************/

allPhotographeLikes();

/*********************** INCREMENTER LES LIKES ******************************************/
