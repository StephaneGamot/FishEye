const dropdownMenu = document.getElementById("dropdown-menu");
const dropdownButtonPopular = document.getElementById("dropdown-button-popular");
const arrow = document.getElementById("arrow");

dropdownButtonPopular.addEventListener("mouseover", dropdownMenuSelect);

export function dropdownMenuSelect() {
	if (dropdownMenu.style.display === "none") {
		dropdownMenu.style.display = "block";
		arrow.style.transform = "rotate(180deg)";
	} else {
		dropdownMenu.style.display = "none";
		arrow.style.transform = "rotate(0deg)";
	}
}
