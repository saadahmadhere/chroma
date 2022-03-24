"use strict";

// Alerts
let alertBtnClose = document.querySelectorAll(".alert_btn_close");

alertBtnClose.forEach((alertCloseButton) => {
  alertCloseButton.addEventListener("click", () => {
    alertCloseButton.parentNode.style.display = "none";
  });
});

// Cards
let cardBtnClose = document.querySelectorAll(".btn_card__close");

cardBtnClose.forEach((cardClose) => {
  cardClose.addEventListener("click", () => {
    cardClose.parentNode.style.display = "none";
  });
});

//Form validation
const formValidate = document.querySelectorAll(".form_valid");

formValidate.forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!form.checkValidity()) {
      form.classList.add("success");
    }
  });
});

//Rating
const allStars = document.querySelectorAll(".rating_star_input");

allStars.forEach((star, id) => {
  star.addEventListener("change", () => {
    if (allStars[id].checked) {
      for (let i = id; i >= 0; i--) {
        allStars[i].checked = true;
      }
    } else {
      for (let i = id; i < allStars.length; i++) {
        allStars[i].checked = false;
      }
    }
  });
});

//Modal
const modalContainer = document.querySelector(".modal_container");
const btnCloseModal = document.querySelector(".close_modal");
const btnsOpenModal = document.querySelectorAll(".show_modal");

const showModal = () => {
  modalContainer.classList.add("modal_active");
  document.body.style.overflow = "hidden";
};

const hideModal = () => {
  modalContainer.classList.remove("modal_active");
  document.body.style.overflow = "visible";
};

btnsOpenModal.forEach((openButton) => {
  openButton.addEventListener("click", showModal);
});

btnCloseModal.addEventListener("click", hideModal);

modalContainer.addEventListener("click", hideModal);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modalContainer.classList.contains("modal_active")) {
    hideModal();
  }
});
