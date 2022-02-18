"use strict"

/*Nav-doc*/
const btnBurger = document.querySelector(".burger");
const btnNavClose = document.querySelector(".nav_close");
const navLinks = document.querySelector(".nav_links");

const showNav = () => {
    navLinks.classList.add("nav_active");
}

const hideNav = () => {
    navLinks.classList.remove("nav_active")
}

btnBurger.addEventListener("click", showNav);
btnNavClose.addEventListener("click", hideNav);

/*Sidebar*/
const sidebar = document.querySelectorAll(".sidebar_component");
const sidebarBody = document.querySelector(".sidebar_body");
const sidebarArrow = document.querySelector(".sidebar_arrow");

const toggleSidebar = () => {
    sidebarBody.classList.toggle("sidebar_active")
}

const rotateArrow = () => {
    sidebarArrow.classList.toggle("arrow_rotate");
}

sidebarArrow.addEventListener("click", toggleSidebar);

sidebarArrow.addEventListener("click", rotateArrow);

let query = window.matchMedia("(max-width: 64rem)");

if(query.matches){
    sidebar.forEach(link =>{
        link.addEventListener("click",()=>{
            toggleSidebar();
            rotateArrow();
        })
    })
}
    