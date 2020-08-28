var catName = document.querySelector('.input-name');
var userMail = document.querySelector('.input-mail');
var userPhone = document.querySelector('.input-phone');
var mailIcon = document.querySelector('.mail-icon');
var phoneIcon = document.querySelector('.phone-icon');

userMail.addEventListener("input", function (event) {
  if (userMail.validity.typeMismatch) {
    userMail.setCustomValidity("У тебя лапки?");
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
    userPhone.setCustomValidity("У тебя лапки?");
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
    catName.setCustomValidity("У тебя лапки?");
    catName.style.borderColor = "red";
  } else {
    catName.setCustomValidity("");
    catName.style.borderColor = "#68B738";
  }
});
