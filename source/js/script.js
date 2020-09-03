var catName = document.querySelector('.input-name');
var userMail = document.querySelector('.input-mail');
var userPhone = document.querySelector('.input-phone');
var mailIcon = document.querySelector('.mail-icon');
var phoneIcon = document.querySelector('.phone-icon');
var grayBtn = document.querySelector('.product-card__modal-button');

userMail.addEventListener('input', function () {
  'use strict';
  if (userMail.validity.typeMismatch) {
    userMail.setCustomValidity('Почта указана неверно');
    userMail.style.borderColor = 'red';
    mailIcon.style.fill = 'red';
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
    userPhone.style.borderColor = 'red';
    phoneIcon.style.fill = 'red';
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
    catName.style.borderColor = 'red';
  } else {
    catName.setCustomValidity('');
    catName.style.borderColor = '#68B738';
  }
});

grayBtn.addEventListener('click', function (event) {
  'use strict';
  event.preventDefault();
}, false);
