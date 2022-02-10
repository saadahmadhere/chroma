"use strict"

const btnBurger = document.querySelector(".burger");

const btnNavClose = document.querySelector(".nav_close");
const navLinks = document.querySelector(".nav_links");

const sidebarBody = document.querySelector(".sidebar_body");
const sidebarArrow = document.querySelector(".sidebar_arrow");
const sidebar = document.querySelectorAll(".sidebar_component");

const toggleSidebar = () => {
    sidebarBody.classList.toggle("sidebar_active")
}

const rotateArrow = () =>{
    sidebarArrow.classList.toggle("arrow_rotate");
}

btnBurger.addEventListener("click", ()=>{
    navLinks.classList.add("nav_active");
})

btnNavClose.addEventListener("click", ()=>{
    navLinks.classList.remove("nav_active")
})

sidebarArrow.addEventListener("click", ()=>{
    toggleSidebar();
})

sidebarArrow.addEventListener("click", ()=> {
    rotateArrow();
})

let query = window.matchMedia("(max-width: 1024px)");

if(query.matches){
    sidebar.forEach(link =>{
        link.addEventListener("click",()=>{
            toggleSidebar();
            rotateArrow();
        })
    })
}
    