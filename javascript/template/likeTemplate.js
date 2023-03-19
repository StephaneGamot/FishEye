import { updateTotalLikes } from "../utils/totalLikes.js";

export default function toggleLike(data, likesNumber) {
	if (data.isLiked) {
	  data.currentLikes--;
	  updateTotalLikes(-1);
	} else {
	  data.currentLikes++;
	  updateTotalLikes(1);
	}
	data.isLiked = !data.isLiked;
	likesNumber.textContent = data.currentLikes;
  }
  
// Fonction qui me permet d'incrémenter ou de decrement les likes de chaques photos