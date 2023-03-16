import Api from "../api/Api.js";
import { MediaFactory } from "../factories/mediaFactory.js";
import photoTemplate from "../template/photoTemplate.js";

export const urlparam = new URLSearchParams(window.location.search);
export const ID = urlparam.get("id"); // Jidentifie mon Id
export const dataApi = new Api(); // je recupere la structure de l'appel de l'API
export const { photographers } = await dataApi.getPhotographerById(ID); // je recupere les données des photographes
export const photographerId = photographers.find((elem) => elem.id == ID).id; // je selectionne un seul photographe (celui choisi)
export const { media } = await dataApi.getMediasById(ID); // Je récupere le travail des photographes
export const photographerEachIdMedia = media.filter((elem) => elem.photographerId == ID); // Je sélectionne le travail d'un photographe (celui choisi)
export const galleryMedia = document.getElementById("gallery-media"); // je localise
export const theSlide = document.getElementById("slide"); 
export const slides = [...photographerEachIdMedia]; // Tableau avec tous les medias
export const photoImgs = document.querySelectorAll(".photograph-photoImg"); // Noeud recuperant les photos
export const recupMediaId = photographerEachIdMedia.map((item) => item.id); // cela affiche tous les Id s des medias de l'artiste
export const getMediasDataId = document.querySelectorAll(".photograph-allMedia"); // Noeud récuperant tous les medias
export const totalMedia = getMediasDataId.length;
export const indexElement = document.querySelector('.index');
export const mediaByFactory = photographerEachIdMedia.map((data) =>	MediaFactory.createMediaFactory(data)); // idem mais via le factory
export const modalBtnSlider = document.querySelectorAll(".modal-btn-slider");


