let alertBtnClose = document.querySelectorAll('.alert_btn_close');

alertBtnClose.forEach(alertCloseButton => {
    alertCloseButton.addEventListener('click', () =>{
        alertCloseButton.parentNode.style.display = 'none';
    })
})