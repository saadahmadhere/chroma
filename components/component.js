"use strict"

// Alerts
let alertBtnClose = document.querySelectorAll(".alert_btn_close");

alertBtnClose.forEach(alertCloseButton => {
    alertCloseButton.addEventListener("click", () =>{
        alertCloseButton.parentNode.style.display = "none";
    })
});



// Cards
let cardBtnClose = document.querySelectorAll(".btn_card__close");

cardBtnClose.forEach(cardClose =>{
    cardClose.addEventListener("click", ()=>{
        cardClose.parentNode.style.display = "none";
    })
});



//Form validation
const formValidate = document.querySelectorAll(".form_valid");

formValidate.forEach(form =>{
    form.addEventListener("submit", event =>{
        event.preventDefault();
        if(!form.checkValidity()){
            form.classList.add("success");
        }
    })
})



