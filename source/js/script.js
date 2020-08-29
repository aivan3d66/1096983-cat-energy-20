var navMain = document.querySelector('.main-nav__list');
var navToggle = document.querySelector('.hamburger');
var inputBorder = document.querySelector('.program-form__input');
var catName = document.querySelector('.input-name');
var userMail = document.querySelector('.input-mail');
var userPhone = document.querySelector('.input-phone');
var mailIcon = document.querySelector('.mail-icon');
var phoneIcon = document.querySelector('.phone-icon');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

userMail.addEventListener("input", function (event) {
  if (userMail.validity.typeMismatch) {
    userMail.setCustomValidity("Почта указана неверно");
    userMail.style.borderColor = "red";
    mailIcon.style.fill = "red";
  } else {
    userMail.setCustomValidity("");
    userMail.style.borderColor = "#68B738";
    mailIcon.style.fill = "#68B738";
  }
});

userPhone.addEventListener("input", function (event) {
  if (userPhone.validity.patternMismatch) {
    userPhone.setCustomValidity("Номер указан некорректно");
    userPhone.style.borderColor = "red";
    phoneIcon.style.fill = "red";
  } else {
    userPhone.setCustomValidity("");
    userPhone.style.borderColor = "#68B738";
    phoneIcon.style.fill = "#68B738";
  }
});

catName.addEventListener("input", function (event) {
  if (catName.validity.patternMismatch ) {
    catName.setCustomValidity("Только кириллица");
    catName.style.borderColor = "red";
  } else {
    catName.setCustomValidity("");
    catName.style.borderColor = "#68B738";
  }
});
