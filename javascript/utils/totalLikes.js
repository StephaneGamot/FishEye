import { photographers, photographerEachIdMedia, ID } from "../Config/GetAllData.js";

const photographerId = photographers.filter((elem) => elem.id == ID);
const getNumbersOfMedia = photographerEachIdMedia.length;

let total = photographerEachIdMedia.map((item) => {
	if (item.hasOwnProperty("likes")) {
		return item.likes;
	}
});

export let totalLikes = total.reduce(allPhotographeLikes);

export function allPhotographeLikes(a, b) {
	return a + b;
}
export const dailyPrice = photographerId[0].price;

document.getElementById("allLikesNumber").innerHTML = totalLikes;
document.getElementById("dailyPrice").innerHTML = dailyPrice;
