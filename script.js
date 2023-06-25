const menu = document.querySelector(".fa-bars");
const navbar = document.querySelector(".navbar-list");

function openMenu() {
    navbar.classList.toggle("navbar-list__link");
}
menu.onclick = openMenu;

//sign up
const signUp = document.querySelector(".nav-btn");
const navLayer = document.querySelector(".nav-layer");
const formNav = document.querySelector(".navbar-form");
const navIcon = document.querySelector(".fa-xmark");
function openLayer() {
    formNav.style.display = "block";
    navLayer.style.opacity = 1;
    navLayer.style.visibility = "unset";
}
signUp.onclick = openLayer;

function closeLayer() {
    formNav.style.display = "none";
    navLayer.style.opacity = 0;
    navLayer.style.visibility = "hidden";
}
navLayer.onclick = closeLayer;
navIcon.onclick = closeLayer;
