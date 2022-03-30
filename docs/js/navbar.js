"use strict";

/*Nav-doc*/
const btnBurger = document.querySelector(".burger");
const btnNavClose = document.querySelector(".nav_close");
const navLinks = document.querySelector(".nav_links");

const showNav = () => {
  navLinks.classList.add("nav_active");
};

const hideNav = () => {
  navLinks.classList.remove("nav_active");
};

btnBurger.addEventListener("click", showNav);
btnNavClose.addEventListener("click", hideNav);
