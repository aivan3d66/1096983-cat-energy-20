var windowWidth = Math.max(document.documentElement.clientWidth);
var wine = document.querySelector('.explanation__description--time');

if (windowWidth > 320) {
  wine.innerHTML = 'Уже через месяц наслаждайтесь изменениями к лучшему <br> вашего питомца!';
} else {
  wine.innerHTML = 'Уже через месяц наслаждайтесь изменениями к лучшему вашего питомца!';
};
