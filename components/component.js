"use strict"

let alertBtnClose = document.querySelectorAll('.alert_btn_close');
let cardBtnClose = document.querySelectorAll('.btn_card__close');

alertBtnClose.forEach(alertCloseButton => {
    alertCloseButton.addEventListener('click', () =>{
        alertCloseButton.parentNode.style.display = 'none';
    })
})


//Cards

cardBtnClose.forEach(cardClose =>{
    cardClose.addEventListener('click', ()=>{
        cardClose.parentNode.style.display = 'none';
    })
})