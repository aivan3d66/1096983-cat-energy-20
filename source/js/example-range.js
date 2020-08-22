$(document).ready(function() {
  $('.example__slider-comparsion').each(function() {
  var cur = $(this);
  var width = cur.width()+'px';
    cur.find('.example__item-cat img').css('width', width);
    drags(cur.find('.example__range'), cur.find('.example__item-cat'), cur);
  });
});

$(window).exampleCat(function() {
  $('.example__slider-comparsion').each(function() {
  var cur = $(this);
  var width = cur.width()+'px';
  cur.find('.example__item-cat img').css('width', width);
  });
});

function drags(dragElement, exampleCatElement, container) {
  dragElement.on('mousedown touchstart', function(e) {
    dragElement.addClass('draggable');
    exampleCatElement.addClass('resizable');

    var startX = (e.pageX) ? e.pageX :  e.originalEvent.touches[0].pageX;

    var dragWidth = dragElement.outerWidth(),
      posX = dragElement.offset().left + dragWidth - startX,
      containerOffset = container.offset().left,
      containerWidth = container.outerWidth();

      minLeft = containerOffset + 10;
      maxLeft = containerOffset + containerWidth - dragWidth - 10;

  dragElement.parents().on("mousemove touchmove", function(e) {

  var moveX = (e.pageX) ? e.pageX : e.originalEvent.touches[0].pageX;

  leftValue = moveX + posX - dragWidth;

  if (leftValue < minLeft) {
    leftValue = minLeft;
  } else if (leftValue > maxLeft) {
    leftValue = maxLeft;
  }

  widthValue = (leftValue + dragWidth / 2 - containerOffset) * 100 / containerWidth + '%';

  $('.draggable').css('left', widthValue).on('mouseup touchend touchcancel', function () {
  $(this).removeClass('draggable');
    exampleCatElement.removeClass('resizable');
  });
  $('.resizable').css('width', widthValue);
  }).on('mouseup touchend touchcancel', function() {
    dragElement.removeClass('draggable');
    exampleCatElement.removeClass('resizable');
  });
    e.preventDefault();
  }).on('mouseup touchend touchcancel', function(e) {
    dragElement.removeClass('draggable');
    exampleCatElement.removeClass('resizable');
  });
}

