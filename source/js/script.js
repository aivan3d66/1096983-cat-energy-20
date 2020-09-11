var catName = document.querySelector('.program-form__input-text');
var userMail = document.querySelector('.program-form__input-mail');
var userPhone = document.querySelector('.program-form__input-phone');
var mailIcon = document.querySelector('.program-form__svg-mail');
var phoneIcon = document.querySelector('.program-form__svg-phone');
var grayBtn = document.querySelector('.product-card__modal-button');

userMail.addEventListener('input', function () {
  'use strict';
  if (userMail.validity.typeMismatch) {
    userMail.setCustomValidity('Почта указана неверно');
    userMail.style.borderColor = 'red';
    mailIcon.style.fill = '#FF0000';
  } else {
    userMail.setCustomValidity('');
    userMail.style.borderColor = '#68B738';
    mailIcon.style.fill = '#68B738';
  }
});

userPhone.addEventListener('input', function () {
  'use strict';
  if (userPhone.validity.patternMismatch) {
    userPhone.setCustomValidity('Номер указан некорректно');
    userPhone.style.borderColor = '#FF0000';
    phoneIcon.style.fill = '#FF0000';
  } else {
    userPhone.setCustomValidity('');
    userPhone.style.borderColor = '#68B738';
    phoneIcon.style.fill = '#68B738';
  }
});

catName.addEventListener('input', function () {
  'use strict';
  if (catName.validity.patternMismatch) {
    catName.setCustomValidity('Только кириллица');
    catName.style.borderColor = '#FF0000';
  } else {
    catName.setCustomValidity('');
    catName.style.borderColor = '#68B738';
  }
});

grayBtn.addEventListener('click', function (event) {
  'use strict';
  event.preventDefault();
}, false);
