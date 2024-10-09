let hamburgerMenu = document.getElementById("menu");
let closeMenu = document.getElementById("close");

let menuSection = document.querySelector(".menu");

hamburgerMenu.addEventListener("click", () => {
  menuSection.style.display = "block";
});

closeMenu.addEventListener("click", () => {
  menuSection.style.display = "none";
});
