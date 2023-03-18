export function likePlusMinus(data) {
	const { likes } = data;
	let theLikes = likes;
	if (theLikes === likes) {
		theLikes++;
		console.log(theLikes);
	} else {
		theLikes--;
		console.log(theLikes);
	}
	likesNumber.textContent = theLikes;
}

// Fonction qui me permet d'incrémenter ou de decrement les likes de chaques photos